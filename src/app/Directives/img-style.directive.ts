import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
})
export class ImgStyleDirective {
  // property decorator
  @Input() radius1: string = '60px';
  @Input("ImgStyle") radius2: string = '70px';
  constructor(private element: ElementRef) {
    // document.getElement
    this.element.nativeElement.style.borderRadius = '30px';
  }

  // onclick=func()
  // method decorator
  @HostListener('mouseover') func1() {
    this.element.nativeElement.style.borderRadius = `${this.radius1}`;
    this.element.nativeElement.style.opacity = '.7';
  }
  @HostListener('mouseout') func2() {
    this.element.nativeElement.style.borderRadius = `${this.radius2}`;
    this.element.nativeElement.style.opacity = '1';
  }
}
