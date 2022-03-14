import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictDeforestationComponent } from './predict-deforestation.component';

describe('PredictDeforestationComponent', () => {
  let component: PredictDeforestationComponent;
  let fixture: ComponentFixture<PredictDeforestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictDeforestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictDeforestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
