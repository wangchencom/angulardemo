import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyserveComponent } from './myserve.component';

describe('MyserveComponent', () => {
  let component: MyserveComponent;
  let fixture: ComponentFixture<MyserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
