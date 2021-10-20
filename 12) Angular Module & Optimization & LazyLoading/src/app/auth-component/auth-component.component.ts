import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { NgForm } from "@angular/forms";
import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { AuthResponseData, AuthServices } from "./auth.services";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlacholderDirective } from "../shared/placeholder/placeholder.directive";
@Component({
  selector: "app-auth-component",
  templateUrl: "./auth-component.component.html",
  styleUrls: ["./auth-component.component.css"],
})
export class AuthComponentComponent implements  OnDestroy{
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  @ViewChild(PlacholderDirective,{static : false}) alertHost: PlacholderDirective;

  private closeSub : Subscription;

  constructor(
    private authServices: AuthServices,
    private route: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitAuth(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authServices.login(email, password);
    } else {
      authObs = this.authServices.onSignup(email, password);
    }

    authObs.subscribe(
      (respData) => {
        console.log(respData);
        this.isLoading = false;
        this.route.navigate(["/recipes"]);
      },
      (errorRes) => {
        console.log(errorRes);
        this.error = errorRes;
        this.showErrorAlert(errorRes);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandlingError() {
    this.error = null;
  }

  private showErrorAlert(errorMessage: string) {
    const alertcmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      const hostViewContainerRef = this.alertHost.viewContainerRef;
      hostViewContainerRef.clear();

      const componentRef= hostViewContainerRef.createComponent(alertcmpFactory);

      componentRef.instance.message = errorMessage;

      this.closeSub = componentRef.instance.close.subscribe(()=>{
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();  
      })
  }

  ngOnDestroy(){
    if(this.closeSub)
    {
      this.closeSub.unsubscribe();
    }
  }
}
