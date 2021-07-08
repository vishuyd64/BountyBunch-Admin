import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminDetailEditComponent } from './sub-admin-detail-edit.component';

describe('SubAdminDetailEditComponent', () => {
  let component: SubAdminDetailEditComponent;
  let fixture: ComponentFixture<SubAdminDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAdminDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdminDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
