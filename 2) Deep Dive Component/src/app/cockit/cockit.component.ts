import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockit',
  templateUrl: './cockit.component.html',
  styleUrls: ['./cockit.component.css'],
})
export class CockitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string; serverContent: string;}>();
 @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string; serverContent: string;}>();

  // newServerName: any = '';
  // newServerContent: any = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput : ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  onAddServer(serverInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput?.nativeElement.value,
    });
  }

  // onAddBlueprint() {
  //   this.bluePrintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
    onAddBlueprint(serverInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput?.nativeElement.value,
    });
  }
}
