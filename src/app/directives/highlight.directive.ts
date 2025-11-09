import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input('appHighlight') isActive = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.isActive) {
      this.renderer.setStyle(this.el.nativeElement, 'background', '#f0f8ff');
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #90caf9');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background');
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }
}
