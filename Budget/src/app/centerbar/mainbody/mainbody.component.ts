import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent  {
  dataCAP:any;
  constructor(service: DataService) {
    this.dataCAP=service.getCapData();
   }
}
