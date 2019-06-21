import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlicenseComponent } from './carlicense.component';

describe('CarlicenseComponent', () => {
  let component: CarlicenseComponent;
  let fixture: ComponentFixture<CarlicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
