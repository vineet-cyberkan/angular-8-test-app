import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-server', //as a html element tag
  //selector: '.app-server', //as a html element class attribute
  selector: 'app-server', //as a html element tag
  templateUrl: './server.component.html',
  //template: `
  //<app-server></app-server>`,
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
