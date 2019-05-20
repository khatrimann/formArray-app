import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
    $(window).focus(function () {
      console.log('has focus');
    }).blur(function() {
      console.log('lost focus');
    });
  }

  ngOnInit() {
    $(window).focus(function () {
      console.log('has focus');
    }).blur(function() {
      console.log('lost focus');
    });
  }
}
