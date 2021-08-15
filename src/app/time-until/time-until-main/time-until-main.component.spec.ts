import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeUntilMainComponent } from './time-until-main.component';

describe('TimeUntilMainComponent', () => {
  let component: TimeUntilMainComponent;
  let fixture: ComponentFixture<TimeUntilMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeUntilMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeUntilMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
