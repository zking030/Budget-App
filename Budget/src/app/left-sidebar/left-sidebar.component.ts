import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent {
  quickDropExpand: boolean = false;

onClick(){
  this.quickDropExpand = !this.quickDropExpand
}
}
