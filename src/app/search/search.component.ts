import { Component, OnInit } from '@angular/core';
import { FilterDealsService } from '../filter-deals.service';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterProducts:any[];
  items:any;
  prod:String;
  progress:boolean = true; 
  constructor(private filter:FilterDealsService,private http:Http) {
    
   }

  ngOnInit() {
    
this.filter.cast.subscribe(items =>{
  if(items){this.progress = false}
  this.items = items;
} ); 

this.filter.cast1.subscribe(prod => this.prod = prod);

  }

//    filterM(){
//      this.filterProducts=this.filter.productArray;
//     console.log("This is from constructor: "+this.items);
//     console.log(this.items);
// }
  
  open(url){
    window.open(url,'_blank');
  }
}
