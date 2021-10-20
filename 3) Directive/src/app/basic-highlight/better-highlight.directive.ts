import { DoCheck, HostBinding, HostListener, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit, DoCheck {

 @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    console.log("Constuctor value:  "+this.backgroundColor);
  }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','grey');
    this.backgroundColor = 'transparent'
    console.log("OnInit value:  "+this.backgroundColor);
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','grey');
    this.backgroundColor = 'grey';
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','cyan');
    this.backgroundColor= 'orange';
  }
   ngDoCheck()
   {
     console.log("Docheck value:  "+this.backgroundColor);
   }
}
