import { Component, OnInit } from '@angular/core';
import { Video } from '../video-list/video-list.component';
import { VideoDataService } from '../../video-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css'],
})
export class VideoDashboardComponent implements OnInit {
  dataForVideoList: Observable<Video[]>;
  selectedVideo: Video;

  constructor(videoDataService: VideoDataService) {
    this.dataForVideoList = videoDataService.loadVideos();
  }

  ngOnInit(): void {}

  videoSelected(video: Video) {
    this.selectedVideo = video;
  }
}
