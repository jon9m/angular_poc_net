import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregistrationComponent } from './carregistration.component';

describe('CarregistrationComponent', () => {
  let component: CarregistrationComponent;
  let fixture: ComponentFixture<CarregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
