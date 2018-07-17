import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftBoxEx1Component } from './shift-box-ex1.component';

describe('ShiftBoxEx1Component', () => {
  let component: ShiftBoxEx1Component;
  let fixture: ComponentFixture<ShiftBoxEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftBoxEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftBoxEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
