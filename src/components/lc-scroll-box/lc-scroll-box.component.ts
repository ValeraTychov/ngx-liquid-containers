import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { HammerInput } from '../../core/gestures/gesture-annotations';


@Component({
  selector: 'lc-scroll-box',
  templateUrl: './lc-scroll-box.component.html',
  styleUrls: ['./lc-scroll-box.component.css'],
  host: {
    '(pointerdown)':'onPointerDown($event)',
    '(drag)': 'onMove($event)',
    '(dragstart)':'onMoveStart($event)',
    '(dragend)':'onMoveEnd($event)',
    '[scrollLeft]':'scrollPosition.left',
    '[scrollTop]':'scrollPosition.top',
    '[class.ondrag]':'isMoving'

  }
})
export class LcScrollBox implements OnInit {

  // Scroll shift to cursor shift ratio. 
  @Input () sensitivity: number = 1;
  
  isMoving: boolean;

  // HammerJS events can't stopPropagation();
  // We use allowMove for prevent moving parent DOM-elements which use same dirrective.
  // Native browser event onPointerDown sets allowMove true and stops propagation.
  allowMove: boolean = false;

  containerElement: HTMLElement;

  scrollPosition: { left: number, top: number } = { left: 0, top: 0 }
   
  getScrollPositionFromElement(): { left: number, top: number } {
    let left = this.containerElement.scrollLeft;
    let top = this.containerElement.scrollTop;

    return { left: left, top: top }
  };

  private startCursorPosition: { x: number, y: number } = { x: 0, y: 0 };

  private startScrollPosition: { left: number, top: number } = { left: 0, top: 0 };

  constructor(private elementRef: ElementRef) {
    this.containerElement = elementRef.nativeElement;
  }

  ngOnInit() {
  }

  onPointerDown(event){
    window.getSelection().removeAllRanges();
    
    let target = event.target as HTMLElement;

    while (target != this.containerElement){
      if ( target.classList.contains("lc-no-scroll") ) {
        event.stopPropagation();
        return;
      }
      target = target.parentElement;
    }
    // In Mozilla
    // It prevents our event handling when the pointer is on scrollbars of the element.
    if (event.clientX >= this.getVerticalScrollBarOffsetLeft() ||
        event.clientY >= this.getHorizontalScrollBarOffsetTop() ) {

      return; 
    }

    this.allowMove = true;

    event.stopPropagation();
  }

  getVerticalScrollBarOffsetLeft(): number {
    let elemRect: ClientRect = this.containerElement.getBoundingClientRect();

    return elemRect.left + this.containerElement.clientWidth;
  }

  getHorizontalScrollBarOffsetTop(): number {
    let elemRect: ClientRect = this.containerElement.getBoundingClientRect();
    return elemRect.top + this.containerElement.clientHeight;
  }

  onMoveStart(event: HammerInput){
    if (!this.allowMove) return;

    this.isMoving = true;

    this.startScrollPosition = this.getScrollPositionFromElement();
    this.startCursorPosition = { x: event.center.x, y: event.center.y }

  }

  onMove(event: HammerInput){
    if (!this.isMoving) return;

    this.updateScrollPosition({ x: event.center.x, y: event.center.y });
  }

  updateScrollPosition(cursorPosition: { x: number, y: number }) {
    // Quickmath 
    // scrollPosition - startScrollPosition = sensitivity * (cursorPosition - startCursorPosition);
    let deltaX = this.sensitivity * (this.startCursorPosition.x - cursorPosition.x);
    let deltaY = this.sensitivity * (this.startCursorPosition.y - cursorPosition.y);
    let left = this.startScrollPosition.left + deltaX;
    let top = this.startScrollPosition.top + deltaY;
    
    this.scrollPosition = { left: left, top: top };
  }

  onMoveEnd(event: HammerInput){
    this.isMoving = false;
    this.allowMove = false;
  }
}
