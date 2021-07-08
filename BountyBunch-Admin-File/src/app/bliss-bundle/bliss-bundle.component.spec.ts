import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlissBundleComponent } from './bliss-bundle.component';

describe('BlissBundleComponent', () => {
  let component: BlissBundleComponent;
  let fixture: ComponentFixture<BlissBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlissBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlissBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
