import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit {

  @HostBinding('class.quete') myClass: boolean;

  constructor() {}

   ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
  @HostListener('mouseenter') mouseEnterEvent (eventData: Event) {
    this.myClass = true;
  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData: Event) {
    this.myClass = false;
  }
}
