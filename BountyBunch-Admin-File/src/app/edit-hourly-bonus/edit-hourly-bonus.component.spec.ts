import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHourlyBonusComponent } from './edit-hourly-bonus.component';

describe('EditHourlyBonusComponent', () => {
  let component: EditHourlyBonusComponent;
  let fixture: ComponentFixture<EditHourlyBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHourlyBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHourlyBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
