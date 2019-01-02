import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FilterDealsService } from '../filter-deals.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private http:Http,private filter:FilterDealsService) { }
  
  ngOnInit() {
  }
products:any;
productArray:any[];

 search(value){
   console.log(value);
   this.http.get(`http://api.pivoxlabs.in/morningdeals/search/${value}`)
   .subscribe(response=>{
     
     this.products=response.json();
     
      this.productArray=this.products.products;
     
      this.filter.filterMethod(this.productArray);
      

   });
   

 }

}
