import { Component } from '@angular/core';
import { TrackInfo } from 'src/app/Models/track-info';
import { TrackInfoInter } from 'src/app/Models/track-info-inter';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
// track:string="Hello Frontend Track";

// sayHello(){
//   return "Hello World";
// }

// test class
trackClass:TrackInfo=new TrackInfo("Frontend","https://www.nicepng.com/png/detail/947-9477723_front-end-development-logos-for-example-html-5.png",["JS","Firebase","Angular"]);


// test interface
trackInterface:TrackInfoInter={trackName:"Frontend Track",trackNum:44,courses:["SCSS","React js","Flutter","Unit testing"]};

}
