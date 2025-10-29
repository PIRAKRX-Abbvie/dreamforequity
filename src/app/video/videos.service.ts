import { ElementRef, Injectable } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
interface IVideo {
  player: ElementRef & YouTubePlayer;
  id: string;
}
@Injectable({
  providedIn: 'root'
})
export class VideosService {

  videos: IVideo[] = [];

  registerVideo(video: IVideo): void {
    this.videos.push(video);
  }

  handleStopAll(videoId: string): void {
    this.videos.map((video) => {
      if (video.id !== videoId) {
        video.player.stopVideo()
      }
    })
  }


  constructor() { }
}
