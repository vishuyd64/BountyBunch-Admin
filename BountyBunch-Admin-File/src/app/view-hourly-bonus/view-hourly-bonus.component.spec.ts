import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHourlyBonusComponent } from './view-hourly-bonus.component';

describe('ViewHourlyBonusComponent', () => {
  let component: ViewHourlyBonusComponent;
  let fixture: ComponentFixture<ViewHourlyBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHourlyBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHourlyBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
