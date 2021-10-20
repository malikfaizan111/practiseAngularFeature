import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent implements OnInit {
  @Input() account!: { name: string; status: string; };
  @Input() id!: number;


  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}
  ngOnInit()
  {
    
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdater.emit(status);
  }
}
