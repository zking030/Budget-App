import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
  @Input('title') title: string | undefined;
  @Output('outTitle') outTitle: string | undefined;
  isExpanded:boolean = false;
  isClicked:boolean = false;
  
toggle(){
  this.isExpanded= !this.isExpanded;
  this.outTitle=this.title;
}
onClickButton(){
this.isClicked=!this.isClicked
}
}
