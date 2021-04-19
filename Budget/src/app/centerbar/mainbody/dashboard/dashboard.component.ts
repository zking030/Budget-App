import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  host:{class:'mainbody'},
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
