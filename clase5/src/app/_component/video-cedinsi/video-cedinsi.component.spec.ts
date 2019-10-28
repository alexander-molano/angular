import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCedinsiComponent } from './video-cedinsi.component';

describe('VideoCedinsiComponent', () => {
  let component: VideoCedinsiComponent;
  let fixture: ComponentFixture<VideoCedinsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCedinsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCedinsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
