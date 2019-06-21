import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedingfineComponent } from './speedingfine.component';

describe('SpeedingfineComponent', () => {
  let component: SpeedingfineComponent;
  let fixture: ComponentFixture<SpeedingfineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedingfineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedingfineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
