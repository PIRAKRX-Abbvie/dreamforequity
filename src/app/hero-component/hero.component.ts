import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faChevronDown, faStop, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})

export class HeroComponent implements OnInit {

    faChevronDown = faChevronDown;
    faStop = faStop;
    faPlay = faPlay;
    faPause = faPause;
    videoPlaying = false;

    @ViewChild('heroVideo') video: ElementRef;
    @ViewChild('videoPlaceholder') videoPlaceholder: any;

    constructor () {}

    ngOnInit(): void { }

    handlePlayPause(): void { 
      if (this.video.nativeElement.paused) { 
        this.video.nativeElement.play();
        this.videoPlaying = true;
        if (this.video.nativeElement.classList.contains('hide')) { 
          this.video.nativeElement.classList.remove('hide');
          this.video.nativeElement.classList.add('show');
          this.videoPlaceholder?.nativeElement.classList.add('hide');
          this.videoPlaceholder?.nativeElement.classList.remove('show');
        }
      } else { 
        this.video.nativeElement.pause();
        this.videoPlaying = false;
      }
    }

    handleStop(): void { 
      this.video.nativeElement.pause();
      this.video.nativeElement.currentTime = 0;
      this.videoPlaying = false;
      if (this.videoPlaceholder?.nativeElement.classList.contains('hide')) {
        this.videoPlaceholder?.nativeElement.classList.remove('hide');
        this.videoPlaceholder?.nativeElement.classList.add('show');
        this.video.nativeElement.classList.remove('show');
        this.video.nativeElement.classList.add('hide')
      }
    }

}