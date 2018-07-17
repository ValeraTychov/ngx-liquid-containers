import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboEx1Component } from './combo-ex1.component';

describe('ComboEx1Component', () => {
  let component: ComboEx1Component;
  let fixture: ComponentFixture<ComboEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
