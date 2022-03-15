import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PredictDeforestationComponent } from './components/predict-deforestation/predict-deforestation.component';
import { DeforstationPanelComponent } from './components/predict-deforestation/deforstation-panel/deforstation-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SimulationTabComponent } from './components/predict-deforestation/deforstation-panel/simulation-tab/simulation-tab.component';
import { ActualTimeTabComponent } from './components/predict-deforestation/deforstation-panel/actual-time-tab/actual-time-tab.component';
import { PredictResultComponent } from './components/predict-deforestation/deforstation-panel/predict-result/predict-result.component'

@NgModule({
  declarations: [
    AppComponent,
    PredictDeforestationComponent,
    DeforstationPanelComponent,
    SimulationTabComponent,
    ActualTimeTabComponent,
    PredictResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
