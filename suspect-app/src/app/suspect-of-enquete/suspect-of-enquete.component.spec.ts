import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectOfEnqueteComponent } from './suspect-of-enquete.component';

describe('SuspectOfEnqueteComponent', () => {
  let component: SuspectOfEnqueteComponent;
  let fixture: ComponentFixture<SuspectOfEnqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectOfEnqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectOfEnqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
