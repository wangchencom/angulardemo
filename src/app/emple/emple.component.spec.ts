import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleComponent } from './emple.component';

describe('EmpleComponent', () => {
  let component: EmpleComponent;
  let fixture: ComponentFixture<EmpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
