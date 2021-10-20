import { UserService } from './user/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  activesubject= false;
  destroyObservable: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.destroyObservable=  this.userService.ActivatedEmitter.subscribe(
      (data)=> {
        this.activesubject = data;
      }
    )
  }
  ngOnDestroy()
  {
    this.destroyObservable.unsubscribe();
  }
  
}
