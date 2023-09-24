import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormFieldHighlight]',
})
export class FormFieldHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'lightblue'
    );
  }

  @HostListener('blur') onBlur() {
    if (!this.el.nativeElement.validity.valid) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}
