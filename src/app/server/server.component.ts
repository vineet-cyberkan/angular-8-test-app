import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-server', //as a html element tag
  selector: '[app-server]', //as a html element attribute
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
