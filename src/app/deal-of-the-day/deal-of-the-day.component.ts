import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-deal-of-the-day',
  templateUrl: './deal-of-the-day.component.html',
  styleUrls: ['./deal-of-the-day.component.css']
})
export class DealOfTheDayComponent implements OnInit {
  
  allProducts:any[];
  allOffers:any;
images:any[];
  constructor(private http:Http) {
    http.get("http://api.pivoxlabs.in/morningdeals/flipkart/getdeals")
    .subscribe(response =>{
      
      this.allOffers = response.json();
      this.allProducts = this.allOffers.allOffersList;
      
      

    });
   }

  ngOnInit() {
  }
  open(url){
    window.open(url,'_blank');
  }

}
