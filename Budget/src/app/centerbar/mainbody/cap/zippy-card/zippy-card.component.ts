import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy-card',
  templateUrl: './zippy-card.component.html',
  styleUrls: ['./zippy-card.component.css']
})
export class ZippyCardComponent {
@Input('heading') heading:any =undefined;
@Input('isRight') isRight:any=undefined;
isExpanded: boolean = false;


onCardClick(){
this.isExpanded=!this.isExpanded
}

}
