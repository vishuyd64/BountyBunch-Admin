import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManagementDetailComponent } from './post-management-detail.component';

describe('PostManagementDetailComponent', () => {
  let component: PostManagementDetailComponent;
  let fixture: ComponentFixture<PostManagementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostManagementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
