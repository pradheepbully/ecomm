import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';

  loginData:FormGroup;
  signUpData:FormGroup;

  constructor(private modalService: NgbModal, private form: FormBuilder) {}

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
    emailid:['',[Validators.required]],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
  }) ;
}

onSubmit(value){
console.log(value);
}


}
