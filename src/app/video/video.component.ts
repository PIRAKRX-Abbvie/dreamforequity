import { Component, ElementRef, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { VideosService } from './videos.service';
import { ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() videoId: string;
  @Input() poster: string;
  id: string;
  apiLoaded: boolean = false;

  @ViewChild('video') video: ElementRef;

  constructor(private videoService: VideosService) {
    this.id = uuidv4();
  }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
  ngAfterViewInit(): void {
    this.videoService.registerVideo({
      player: this.video as ElementRef & YouTubePlayer,
      id: this.id
    });
  }

  handleStateChange(e: any): void {
    if (e.data === 3) {
      this.videoService.handleStopAll(this.id);
    }
  }

}
