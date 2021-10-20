import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color: white;
    }
    .chitta{
        color: white;
    }
    `]
})

export class ServerComponent{
 serverId:number = 10;
 serverStatus:string='offline';
 username = '';
 secret = false;
 log: Array<number> = [];
 datii : Array<any> = [];
 constructor(){
     this.serverStatus = Math.random()> 0.5 ? 'online': 'offline';
 }
 getServerStatus()
 {
     return this.serverStatus;
 }

 getColor()
 {
     return this.serverStatus === 'online' ? 'green' : 'red';
 }
 
 toggleDisplay()
 {
     this.secret = !this.secret;
     this.log.push(this.log.length + 1);
     this.datii.push(new Date());

 }
 getneela()
 {

         return this.log.length === 5 || this.log.length> 5 ? 'lightblue': 'green';
        

 }
}