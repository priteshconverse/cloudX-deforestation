import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeforestationDataService } from '../../../../services/deforestation-data.service'

@Component({
  selector: 'app-simulation-tab',
  templateUrl: './simulation-tab.component.html',
  styleUrls: ['./simulation-tab.component.css']
})
export class SimulationTabComponent implements OnInit {
  dataSub:any;
  climateData: any;
  deforestationPrediction = new FormGroup({
    region: new FormControl(''),
    surfacePressure: new FormControl(''),
    earthSkinTemperature: new FormControl(''),
    temperatureAtTwoMeters: new FormControl(''),
    specificHumidityAtTwoMeters: new FormControl(''),
    relativeHumidityAtTwoMeters: new FormControl(''),
    surfaceSoilWetness: new FormControl(''),
    profileSoilMoisture: new FormControl(''),
    temperatureAtTwoMetersRange: new FormControl(''),
    precipitationCorrected: new FormControl('')
  })

  constructor(
    private deforestationDataService: DeforestationDataService
  ) { }

  ngOnInit() {
    this.dataSub = this.deforestationDataService.singleYearDataObs.subscribe(data => {
      this.climateData = data;
    })

    this.setFormControlValues();    
  }

  ngDoCheck() {
    const deforestationData = this.deforestationPrediction.value
  }

  setFormControlValues() {
    this.climateData = {
      "region": "Brazil",
      "year": "2017",
      "month": "02",
      "surfacePressure": 99.92,
      "earthSkinTemperature": 26.06,
      "temperatureAtTwoMeters": 25.22,
      "specificHumidityAtTwoMeters": 18.43,
      "relativeHumidityAtTwoMeters": 91.44,
      "surfaceSoilWetness": 0.84,
      "profileSoilMoisture": 0.81,
      "temperatureAtTwoMetersRange": 6.27,
      "precipitationCorrected": 10.49
    }

    if (this.climateData) {
      this.deforestationPrediction.controls['region'].setValue(this.climateData.region);
      this.deforestationPrediction.controls['surfacePressure'].setValue(this.climateData.surfacePressure);
      this.deforestationPrediction.controls['earthSkinTemperature'].setValue(this.climateData.earthSkinTemperature);
      this.deforestationPrediction.controls['temperatureAtTwoMeters'].setValue(this.climateData.temperatureAtTwoMeters);
      this.deforestationPrediction.controls['specificHumidityAtTwoMeters'].setValue(this.climateData.specificHumidityAtTwoMeters);
      this.deforestationPrediction.controls['relativeHumidityAtTwoMeters'].setValue(this.climateData.relativeHumidityAtTwoMeters);
      this.deforestationPrediction.controls['surfaceSoilWetness'].setValue(this.climateData.surfaceSoilWetness);
      this.deforestationPrediction.controls['profileSoilMoisture'].setValue(this.climateData.profileSoilMoisture);
      this.deforestationPrediction.controls['temperatureAtTwoMetersRange'].setValue(this.climateData.temperatureAtTwoMetersRange);
      this.deforestationPrediction.controls['precipitationCorrected'].setValue(this.climateData.precipitationCorrected);
    }
  }

  onSubmit() {
    console.log("ng on submit data", this.deforestationPrediction.value)
  }

}
