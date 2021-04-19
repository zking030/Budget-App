import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budget';
  viewSizeSmall:boolean | undefined;
  layout="layout_grid2"; 
  checkProperties(){
  if(window.innerWidth==1260){
    this.viewSizeSmall=!this.viewSizeSmall
    }
  }
}