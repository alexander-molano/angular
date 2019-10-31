import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioCedinsiComponent } from './portafolio-cedinsi.component';

describe('PortafolioCedinsiComponent', () => {
  let component: PortafolioCedinsiComponent;
  let fixture: ComponentFixture<PortafolioCedinsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioCedinsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioCedinsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
