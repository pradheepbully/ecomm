import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FilterDealsService {

  a:any[];
  products:any;
  productArray:any[];

  private items = new BehaviorSubject<Object>(this.productArray);
  cast = this.items.asObservable(); 


  constructor(private http:Http) { }
  
  searchConfig(value){
    
      this.http.get(`http://api.pivoxlabs.in/morningdeals/search/${value}`)
    .subscribe(response=>{
     
      this.products=response.json();
      
       this.productArray=this.products.products;
       this.items.next(this.productArray); 
    });
    

    
    
  }
}
