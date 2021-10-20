import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthResponseData, AuthServices } from './auth.services';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent {

  isLoginMode = true;
   isLoading = false;
   error:string = null;
  constructor(private authServices: AuthServices, private route : Router){}

  onSwitchMode()
  {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitAuth(form : NgForm){
    if(!form.valid)
    {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if(this.isLoginMode)
    {
     authObs =  this.authServices.login(email,password);
    }
    else{
      authObs = this.authServices.onSignup(email,password);
    }

    authObs.subscribe(respData =>
      {
        console.log(respData);
        this.isLoading = false;
        this.route.navigate(['/recipes']);
      },errorRes =>
      {
        console.log(errorRes);
        this.error = errorRes;
        this.isLoading = false;
      });
    
    form.reset(); 

  }
  

}
