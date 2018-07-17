import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HammerInput } from '../../core/gestures/gesture-annotations';

export class AbstractElement {

  nativeElement: HTMLElement;

  public left: number = 0;
  public top: number = 0;
  public width: number;
  public height: number;

  
  constructor(nativeElement: HTMLElement){
    this.nativeElement = nativeElement;
    this.getPositionFromElement();
    this.getSizeFromElement();
  }

  getPositionFromElement(){
    if (!this.nativeElement.style.transform){
      return;
    }

    let transform: string = this.nativeElement.style.transform;
    
    let translate: RegExpMatchArray = transform.match(/translate.+?\)/);
    
    if (!translate){ 
      return;
    }

    let position: RegExpMatchArray = translate[0].match(/[-\d]+/g);

    this.left = parseInt(position[0]);
    this.top = parseInt(position[1]);
  } 

  getSizeFromElement(){
    this.width = this.nativeElement.offsetWidth;
    this.height = this.nativeElement.offsetHeight;
  }

  setElementPosition( position : {left: number, top: number} ){
    this.left = position.left;
    this.top = position.top;
    this.nativeElement.style.transform = `translate(${position.left}px,${position.top}px)`;
  }

}

@Component({
  selector: 'lc-shift-box',
  templateUrl: './lc-shift-box.component.html',
  styleUrls: ['./lc-shift-box.component.css'],
  host:{
    '(pointerdown)':'onPointerDown($event)',
    '(drag)': 'onMove($event)',
    '(dragstart)':'onMoveStart($event)',
    '(dragend)':'onMoveEnd($event)',
    '(touchmove)':'onTouchMove($event)'
  }

})
export class LcShiftBox implements OnInit {

  @Input() options: any;

  isMoving: boolean;

  containerElement: AbstractElement;

  movableElement: AbstractElement;
  
  cursorOffset : { fromLeft: number, fromTop: number } = { fromLeft: 0, fromTop: 0 };

  // HammerJS events can't stopPropagation();
  // We use allowMove for prevent moving parent DOM-elements which use same dirrective.
  // Native browser event onPointerDown sets allowMove true and stops propagation.
  allowMove: boolean = false;

  constructor(private elementRef: ElementRef) {}
  
  ngOnInit() {
    this.containerElement = new AbstractElement(this.elementRef.nativeElement);
  }

  onPointerDown(event: Event){
    let target = event.target as HTMLElement;

    // Moveable container can cover other elements, like buttons or other containers.
    // If pointerdown event is made directly on movecontainer, we return.
    // It needs to continue propagation of event to other elements.
    if (target == this.containerElement.nativeElement) {
      return;
    }
    
    if ( target.classList.contains("lc-shift-hook") ) {
      let element = this.FindMovableElement(target);
      this.movableElement = new AbstractElement(element);

      this.containerElement.nativeElement.appendChild(element);

      this.allowMove = true;
    }

    event.stopPropagation();
  }

  private FindMovableElement (element: HTMLElement): HTMLElement {
    while (element.parentElement != this.containerElement.nativeElement) {
      element = element.parentElement;
    }
    return element;
  }

  onMoveStart(event: HammerInput){
    
    if (!this.allowMove) return;

    this.isMoving = true;
    this.setCursorOffset({x: event.center.x, y: event.center.y});

  }

  public setCursorOffset(cursorPosition: { x: number, y: number }) {
    this.cursorOffset.fromLeft = cursorPosition.x - this.movableElement.left;
    this.cursorOffset.fromTop = cursorPosition.y - this.movableElement.top;
  }

  onMove(event: HammerInput){
   
    if (!this.isMoving) return;
    
    this.setElementPosition({ x: event.center.x, y: event.center.y });
  }

  public setElementPosition(cursorPosition: { x: number, y: number }) {
    let left = cursorPosition.x - this.cursorOffset.fromLeft;
    let top = cursorPosition.y - this.cursorOffset.fromTop;
    this.movableElement.setElementPosition({left: left, top: top});
  }

  onMoveEnd(event: HammerInput){
    this.isMoving = false;
    this.allowMove = false;
  }

  onTouchMove(event: TouchEvent){
    event.preventDefault();
  }

}
