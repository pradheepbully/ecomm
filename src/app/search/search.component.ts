import { Component, OnInit } from '@angular/core';
import { FilterDealsService } from '../filter-deals.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterProducts:any[];
  
  constructor(private filter:FilterDealsService) { 
    this.filterProducts=this.filter.a;
    console.log("This is from constructor: "+this.filterProducts);
    
  }

  ngOnInit() {
    this.filterProducts=this.filter.a;
    console.log("This is from ngOnInit: "+this.filterProducts);
  }

  filterM(){
    
    this.filterProducts=this.filter.a;
    console.log(this.filterProducts);
    

    
  }
  
  open(url){
    window.open(url,'_blank');
  }
}
