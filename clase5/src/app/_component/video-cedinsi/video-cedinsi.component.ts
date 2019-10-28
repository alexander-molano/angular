import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IframeVideo } from 'src/app/_models/iframe-video';

@Component({
  selector: 'app-video-cedinsi',
  templateUrl: './video-cedinsi.component.html',
  styleUrls: ['./video-cedinsi.component.sass']
})
export class VideoCedinsiComponent implements OnInit {

  @Input() iframeVideo: IframeVideo;

  srcSanitized: any;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {

    console.log(this.iframeVideo.src);
    this.srcSanitized = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeVideo.src);


  }

}
