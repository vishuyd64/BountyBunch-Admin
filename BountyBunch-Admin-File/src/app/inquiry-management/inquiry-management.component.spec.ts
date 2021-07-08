import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryManagementComponent } from './inquiry-management.component';

describe('InquiryManagementComponent', () => {
  let component: InquiryManagementComponent;
  let fixture: ComponentFixture<InquiryManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
