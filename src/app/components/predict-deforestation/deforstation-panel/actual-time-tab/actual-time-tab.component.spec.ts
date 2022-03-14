import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualTimeTabComponent } from './actual-time-tab.component';

describe('ActualTimeTabComponent', () => {
  let component: ActualTimeTabComponent;
  let fixture: ComponentFixture<ActualTimeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualTimeTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualTimeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
