import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCedinsiComponent } from './componente-cedinsi.component';

describe('ComponenteCedinsiComponent', () => {
  let component: ComponenteCedinsiComponent;
  let fixture: ComponentFixture<ComponenteCedinsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCedinsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCedinsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
