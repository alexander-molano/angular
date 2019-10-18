import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedinsiEjercicioPipeComponent } from './cedinsi-ejercicio-pipe.component';

describe('CedinsiEjercicioPipeComponent', () => {
  let component: CedinsiEjercicioPipeComponent;
  let fixture: ComponentFixture<CedinsiEjercicioPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedinsiEjercicioPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedinsiEjercicioPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
