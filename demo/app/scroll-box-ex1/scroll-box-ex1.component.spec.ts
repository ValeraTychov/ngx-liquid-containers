import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBoxEx1Component } from './scroll-box-ex1.component';

describe('ScrollBoxEx1Component', () => {
  let component: ScrollBoxEx1Component;
  let fixture: ComponentFixture<ScrollBoxEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollBoxEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBoxEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
