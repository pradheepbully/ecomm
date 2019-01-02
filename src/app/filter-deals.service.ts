import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class FilterDealsService {

  constructor() { }
a:any[];

  filterMethod(array:any[]){
    this.a=array;
    console.log(this.a);



  }
}
