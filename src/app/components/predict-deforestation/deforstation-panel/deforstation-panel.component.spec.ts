import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeforstationPanelComponent } from './deforstation-panel.component';

describe('DeforstationPanelComponent', () => {
  let component: DeforstationPanelComponent;
  let fixture: ComponentFixture<DeforstationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeforstationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeforstationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
