import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Subscription, Observable, observable, Observer} from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private observablesubcription :Subscription;
  constructor() { }

  ngOnInit() {
    // this.observablesubcription =  interval(1000).subscribe((count) =>{
    //   console.log(count);
    // });

     
    const observable = new Observable(function subscribe(subscriber) {
      let count=0;
     setInterval(() => {
        subscriber.next(count);
        if(count === 2)
        {
            subscriber.complete();
        }
        if(count > 3)
        {
          subscriber.error(new Error('Counter is greated than 3!'));  
        }
        count++;
      }, 1000);
    });

    // const mapvalue = map((data:number)=> {return 'Round:'+ (data+1)});
  
    this.observablesubcription = observable.pipe(filter(data =>{return data> 0}),map((data:number)=> {return 'Round:'+ (data+1)})).subscribe(x => console.log(x),
     error => {console.log(error); alert(error.message)}, ()=> {console.log('Completed')});

    //  this.observablesubcription = observable.subscribe(x => console.log(x),
    //  error => {console.log(error); alert(error.message)}, ()=> {console.log('Completed')});
  
  
    }

  
  ngOnDestroy(){
    this.observablesubcription.unsubscribe();
  }

}
