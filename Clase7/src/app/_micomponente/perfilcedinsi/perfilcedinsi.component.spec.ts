import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilcedinsiComponent } from './perfilcedinsi.component';

describe('PerfilcedinsiComponent', () => {
  let component: PerfilcedinsiComponent;
  let fixture: ComponentFixture<PerfilcedinsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilcedinsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilcedinsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
