import {
  AfterContentChecked,
   AfterContentInit,
   AfterViewChecked,
   AfterViewInit,
   Component,
   DoCheck,
   ElementRef,
   OnChanges,
   OnDestroy,
   OnInit,
   SimpleChanges,
   ViewChild,
   ViewEncapsulation
   } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
  encapsulation: ViewEncapsulation.Emulated // none & shadowDom
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // @ViewChild('storename', {static:true}) storename: ElementRef | undefined;
  @ViewChild('namestore',{static:true}) completename: ElementRef |undefined;
  item: Array<any> = [{name:'faizan'}];
  
  constructor() { 
    console.log('constructor Called');
    
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
    console.log('text content is: '+this.completename?.nativeElement.name);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnchanges Called')
    console.log(changes);
  }

  addname(name2: HTMLInputElement)
  {
    this.item.push({
     name :  name2.value,
     
    })
    name2.value= "";
  }

  onChangecompletly(){
    this.item[0].name = 'completly changed';
  }
  ngDoCheck()
  {
    console.log('ngDocheck Called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Called');
  }

  ngAfterContentChecked()
  {
    console.log('ngafterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit Called');
    console.log('text content is: '+this.completename?.nativeElement.textContent);
  }

  ngAfterViewChecked()
  {
    console.log('ngafterViewChecked called');
  }

  ngOnDestroy()
  {
    console.log('ngOnDestroy called');
  }

  onDestroyfirst()
  {
    this.item.splice(0,1);
  }
}
