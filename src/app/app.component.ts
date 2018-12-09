import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';

  loginData:FormGroup;
  signUpData:FormGroup;

  posts:any[];
  private url = "https://jsonplaceholder.typicode.com/posts";
  details: any;

  constructor(private modalService: NgbModal, private form: FormBuilder, private http:Http) {
    http.get(this.url)
    .subscribe(res=>{
      this.posts = res.json();
      
    });
  }

  createPost(input:HTMLInputElement){
    let post = {body: input.value}
    input.value = '';
    

    this.http.post(this.url, JSON.stringify(post))
    .subscribe(res=>{
      
      post['id'] = res.json().id;
      
      this.posts.splice(0,0,post);
      
     
    });
  }

  openLoginPage(loginpage) {
    this.modalService.open(loginpage, { centered: true });
  }

  openSignUpPage(signuppage){
    this.modalService.dismissAll();
    this.modalService.open(signuppage, {centered:true});
  }
  
ngOnInit(){
  this.loginData=this.form.group({
    username:['', [Validators.minLength(4),Validators.required]],
    password:['',[Validators.required, Validators.minLength(6)]]
  });
  this.signUpData = this.form.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    dob:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
  }) ;
}


private list:any[];
detail:any;

test:any;


onSubmit(value){
  console.log(value);

  this.http.post("https://my-json-server.typicode.com/typicode/demo/posts",
  {
    "title": "Pradheep 4"
  })
  .subscribe(response=>{
    console.log(response);
    if(response){
      this.http.get("https://api.coingdp.com/users/5acb38294ebe4610bc37d538")
      .subscribe(data=>{
        this.test = data.json();
        console.log(this.test);
        console.log(this.test.username);
      });
    
    }
    
  });

}

//   let userDetails = 
//   {
//     user: username,
//      pass: password
//   };
// console.log(userDetails);

// this.http.get("https://reqres.in/api/users")
// .subscribe(res=>{
//   this.details = res.json();
//   this.detail = JSON.stringify(this.details);
//  console.log(this.detail);
// });


// this.http.post("https://reqres.in/api/users",JSON.stringify(userDetails))
// .subscribe(res=>{
//   //console.log(userDetails);
//   userDetails['id'] = res.json().id;
      
//      console.log(res);

// });
// }



}
