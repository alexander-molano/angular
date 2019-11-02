import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincedinsiComponent } from './logincedinsi.component';

describe('LogincedinsiComponent', () => {
  let component: LogincedinsiComponent;
  let fixture: ComponentFixture<LogincedinsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincedinsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincedinsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
