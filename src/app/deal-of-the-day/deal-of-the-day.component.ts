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

progress:boolean = true;
isCollapse:boolean = false;
  breakpoint: number;


  constructor(private http:Http) {
    http.get("http://api.pivoxlabs.in/morningdeals/flipkart/getdeals")
    .subscribe(response =>{
      if(response){this.progress = false;}
      this.allOffers = response.json();
      this.allProducts = this.allOffers.allOffersList;
    });
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

  open(url){
    window.open(url,'_blank');
  }

  
}
