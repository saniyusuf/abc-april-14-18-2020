import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStatFiltersComponent } from './video-stat-filters.component';

describe('VideoStatFiltersComponent', () => {
  let component: VideoStatFiltersComponent;
  let fixture: ComponentFixture<VideoStatFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoStatFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStatFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
