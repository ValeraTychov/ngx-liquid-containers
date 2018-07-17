import { NgModule } from '@angular/core';

import 'hammerjs';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from './core/gestures/gesture-config';

import { LcScrollBox } from './components/lc-scroll-box/lc-scroll-box.component';
import { LcShiftBox } from './components/lc-shift-box/lc-shift-box.component';



@NgModule({
  declarations: [
    LcScrollBox,
    LcShiftBox
  ],
  imports: [
  ],
  exports: [
    LcScrollBox,
    LcShiftBox
  ],
  providers:    [
    { provide: HAMMER_GESTURE_CONFIG, 
      useClass: GestureConfig }
    ],
  bootstrap: []
})
export class LiquidContainersModule { }