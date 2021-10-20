import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  messages:string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    // this.messages = this.route.snapshot.data['message'];
    this.route.data.subscribe(
      (data: Data) =>
      {
        this.messages = data['message'];
      }
    )
  }

}
