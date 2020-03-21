import { Component } from '@angular/core';
import {HomePageJS} from '../assets/js/app.js';
//import {clickMenu} from '../assets/js/app.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app-one';
  app(){
    HomePageJS();
  }
 // clickMenu(){
   // clickMenu();
 // }
}
