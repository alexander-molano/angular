import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCedinsi2Component } from './componente-cedinsi2.component';

describe('ComponenteCedinsi2Component', () => {
  let component: ComponenteCedinsi2Component;
  let fixture: ComponentFixture<ComponenteCedinsi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCedinsi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCedinsi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
