import { HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTotalLearner]'
})
export class TotalLearnerDirective implements OnInit {

  @Input() defaultColor:string | undefined;
  @Input() highlightColor: string | undefined;
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }
   
   ngOnInit()
   {
    // this.elRef.nativeElement.style.backgroundColor = 'lightblue';
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'transparent');
    this.backgroundColor= this.defaultColor;
   }


   @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'purple');
    this.backgroundColor = this.highlightColor;
   }

   @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor', 'magenta');
    this.backgroundColor= this.defaultColor;
   }
   
}
