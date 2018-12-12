import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  // constructor(private http: HttpClient) {
  //   http.get("https://api.github.com/users")
  //   .subscribe(response=>{
  //     //console.log(response);
  //   });
  //  }

  ngOnInit() {
  }
// username: string = "";
// response:any;
//   search(){
//     this.http.get("https://api.github.com/users/"+this.username)
//       .subscribe(response => {
//         this.response = response;
//       });

//   }

}
