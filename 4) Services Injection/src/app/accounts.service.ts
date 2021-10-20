import { EventEmitter, Injectable, Input } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable() // for meta data and service injection in service
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService){}

    statusUpdater = new EventEmitter<string>();
      addAccount(name:string, status:string)
      {
          this.accounts.push({
            name: name,
            status: status
          });
          this.loggingService.logStatusChange(status);
      }
      updateStatus(id:number,status: string)
      {
          this.accounts[id].status = status;
          this.loggingService.logStatusChange(status);
      }
}