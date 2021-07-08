import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAnnonymousComponent } from './report-annonymous.component';

describe('ReportAnnonymousComponent', () => {
  let component: ReportAnnonymousComponent;
  let fixture: ComponentFixture<ReportAnnonymousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAnnonymousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAnnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
