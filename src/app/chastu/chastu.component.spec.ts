import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChastuComponent } from './chastu.component';

describe('ChastuComponent', () => {
  let component: ChastuComponent;
  let fixture: ComponentFixture<ChastuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChastuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
