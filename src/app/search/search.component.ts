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
  breakpoint: number;
  constructor(private filter:FilterDealsService,private http:Http) {
    
   }

  ngOnInit() {
    
    if(window.innerWidth <= 490){
      this.breakpoint = 1;
    }else if(window.innerWidth >= 491 && window.innerWidth <= 770){
      this.breakpoint = 2;
    }else if (window.innerWidth >= 771 && window.innerWidth <= 1024){
      this.breakpoint = 3;
    }else if (window.innerWidth >= 1025 && window.innerWidth <= 1300){
      this.breakpoint = 4;
    }else{
      this.breakpoint = 5;
    }

this.filter.cast.subscribe(items =>{
  if(items){this.progress = false}
  this.items = items;
} ); 

this.filter.cast1.subscribe(prod => this.prod = prod);

  }
  onResize(event) {
    if(event.target.innerWidth <= 490){
      this.breakpoint = 1;
    }else if(event.target.innerWidth >= 491 && event.target.innerWidth <= 770){
      this.breakpoint = 2;
    }else if (event.target.innerWidth >= 771 && event.target.innerWidth <= 1024){
      this.breakpoint = 3;
    }else if (event.target.innerWidth >= 1025 && event.target.innerWidth <= 1300){
      this.breakpoint = 4;
    }else{
      this.breakpoint = 5;
    }

    
    
   
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
