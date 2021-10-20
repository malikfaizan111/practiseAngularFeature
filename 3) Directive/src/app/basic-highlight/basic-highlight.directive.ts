import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
 selector : '[appBasicHighlight]'
})

export class AppBasicHighlight implements OnInit{


    constructor(private elementRef: ElementRef){ 
        // elementRef.nativeElement.style.backgroundColor = 'yellow';
    }

    ngOnInit(){
       this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
}