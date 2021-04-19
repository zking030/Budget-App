import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  getCapData(){
    return[{cap: 'necessities', amount:1000},
    {cap: 'fun money', amount:500},
    {cap: 'saving', amount:150},
    {cap: 'debt', amount:900},
    ];
    
  }
}
