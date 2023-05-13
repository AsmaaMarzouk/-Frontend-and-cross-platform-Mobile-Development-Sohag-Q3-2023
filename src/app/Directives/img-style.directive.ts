import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]',
})
export class ImgStyleDirective implements OnChanges {
  // property decorator
  @Input() radius1: string = '60px';
  @Input("ImgStyle") radius2: string = '70px';
  constructor(private element: ElementRef) {
    // document.getElement
    // this.element.nativeElement.style.borderRadius = '90px';
  }
  ngOnChanges(): void {
    this.element.nativeElement.style.borderRadius = `${this.radius2}`;

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
