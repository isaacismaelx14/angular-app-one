import { Component, OnInit } from '@angular/core';


document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top";

@Component({
  selector: 'app-singup-page',
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.scss']
})
export class SingupPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  clickMenu(){
    document.getElementById('navbar').className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top";
  }
}
