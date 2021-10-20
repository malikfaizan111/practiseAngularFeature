import { Component, OnInit } from '@angular/core';
import { AuthServices } from './auth-component/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authServices: AuthServices){}

  ngOnInit()
  {
this.authServices.autoLogin();
  }
}
