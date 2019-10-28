import { Component } from '@angular/core';
import { IframeVideo } from './_models/iframe-video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  iframeVideo : IframeVideo[];

  
  // width="721" height="541" src="https://www.youtube.com/embed/ZR2JlDnT2l8"

  ngOnInit() {

   this.iframeVideo = [];

   let obj1 = new IframeVideo;
   obj1.src = "https://www.youtube.com/embed/Isic2Z2e2xs";
   obj1.width = 320;
   obj1.height = 900;

   
   let obj2 = new IframeVideo;
   obj2.src = "https://www.youtube.com/embed/ZR2JlDnT2l8";
   obj2.width = 320;
   obj2.height = 900;



    
  //  console.log(this.iframeVideo.src);

  this.iframeVideo.push(obj1, obj2)

  console.log(this.iframeVideo);
  


  }

}
