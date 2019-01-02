import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FilterDealsService } from '../filter-deals.service';
import { AppComponent } from '../app.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

products:any;
productArray:any[];

  constructor(private http:Http,private filter:FilterDealsService) {
    
  }
  
  ngOnInit() {}

 search(value){
   console.log(value);
   this.filter.searchConfig(value);
 }

}
