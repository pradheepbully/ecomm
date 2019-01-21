import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';
import { FilterDealsService } from './filter-deals.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';

  loginData:FormGroup;
  signUpData:FormGroup;
login:any;


  constructor(private modalService: NgbModal, private form: FormBuilder, private http:Http, private snackBar:MatSnackBar,private filter:FilterDealsService) {
  
  }

 
  openLoginPage(loginpage) {
    this.modalService.open(loginpage, { centered: true });
this.login=loginpage;
  }

  openSignUpPage(signuppage){
    this.modalService.dismissAll();
    this.modalService.open(signuppage, {centered:true});
  }

  
ngOnInit(){


  this.loginData=this.form.group({
    username:['', [Validators.minLength(4),Validators.required]],
    password:['',[Validators.required, Validators.minLength(8)]]
  });
  this.signUpData = this.form.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    dob:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    username:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmPwd:['',[Validators.required]]
   });

}

search(value){
  console.log(value);
  this.filter.searchConfig(value);
}




// passwordMismatch(c: AbstractControl): { invalid: boolean } {
//   if (c.get('password').value !== c.get('confirmPwd').value) {
//       return {invalid: true};
//   }
// }
// private list:any[];
// detail:any;

test:any;
userName;
flag:boolean=true;
//Function to be invoked on Login
onLogin(data){
  console.log(data);
  this.userName=data.username;
  let url = "https://api.coingdp.com/login?name="+data.username+"&password="+data.password;

  this.http.post(url,data)
  .subscribe(response=>{
    let res = response.json();
    console.log(res.responseMessage);
    this.snackBar.open(res.responseMessage,'', {
      duration:1000
    });
    if(res.responseMessage=="Login Success"){
    this.modalService.dismissAll();
    this.flag=false;

  }
    if(res.responseMessage=="Authentication Failed")
    this.loginData.reset();

  });

}
onLogout(){
  
  if(confirm("Do you want to logout?"))
  this.flag=true;
  else
  this.flag=false;

}


//Function to be invoked on SignUp
onSignUp(data){
console.log(data);
// let post = {
//   "username":"pradheep",
//   "email":"pradheepbully@gmail.com",
//   "password":"godisgreat"
// }
let url = `https://api.coingdp.com/signup?username=${data.username}&email=${data.email}&password=${data.password}`;

this.http.post(url,data)
.subscribe(response=>{
  let res = response.json();
  console.log(res.responseMessage);
  
  this.snackBar.open(res.responseMessage,'', {
    duration:1000
  });
  this.modalService.dismissAll();
  this.signUpData.reset();
  this.modalService.open(this.login, { centered: true });
  


  });
}



}

// onSubmit(value){
//   console.log(value);

//   this.http.post("https://my-json-server.typicode.com/typicode/demo/posts",
//   {
//     "title": "Pradheep 4"
//   })
//   .subscribe(response=>{
//     console.log(response);
//     if(response){
//       this.http.get("https://api.coingdp.com/users/5acb38294ebe4610bc37d538")
//       .subscribe(data=>{
//         this.test = data.json();
//         console.log(this.test);
//         console.log(this.test.username);
//       });
    
//     }
    
//   });

// }


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

  // posts:any[];
  // private url = "https://jsonplaceholder.typicode.com/posts";
  // details: any;

   // createPost(input:HTMLInputElement){
  //   let post = {body: input.value}
  //   input.value = '';
    

  //   this.http.post(this.url, JSON.stringify(post))
  //   .subscribe(res=>{
      
  //     post['id'] = res.json().id;
      
  //     this.posts.splice(0,0,post);
      
     
  //   });
  // }



