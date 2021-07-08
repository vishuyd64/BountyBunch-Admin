import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyBonusComponent } from './hourly-bonus.component';

describe('HourlyBonusComponent', () => {
  let component: HourlyBonusComponent;
  let fixture: ComponentFixture<HourlyBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
