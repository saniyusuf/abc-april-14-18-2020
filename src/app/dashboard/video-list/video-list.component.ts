import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[];
  highlightedVideo;
  @Output() onVideoSelected = new EventEmitter<Video>();

  constructor() {}

  ngOnInit(): void {}

  setHighlightedVideo(videoData: Video) {
    this.onVideoSelected.emit(videoData);
    this.highlightedVideo = videoData;
  }
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
