import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent implements OnInit {



  constructor(private loggingService: LoggingService,private accountsService: AccountsService)
  {
    this.accountsService.statusUpdater.subscribe(
      (status: string) => alert('New Status: '+ status)
    );
  }
  ngOnInit()
  {
    
  }
  onCreateAccount(accountName: string, accountStatus: string) {
  
    this.accountsService.addAccount(accountName,accountStatus);
    
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

  }

}
