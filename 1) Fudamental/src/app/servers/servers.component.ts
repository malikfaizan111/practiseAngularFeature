import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'server was not Created';
  ServerName='';
  ServerCreate = false;
  server = ['testserver1'];
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  getServer(){
    this.serverCreationStatus = 'Server has been creating';
    this.server.push(this.ServerName);
    this.ServerCreate = true;
  }

  onUpdateServername(event : Event)
  {
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

}
