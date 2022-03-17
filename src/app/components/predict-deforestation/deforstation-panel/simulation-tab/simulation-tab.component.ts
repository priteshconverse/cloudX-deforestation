import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import data from '../../../../../assets/data-set/yearsData.json';

@Component({
  selector: 'app-simulation-tab',
  templateUrl: './simulation-tab.component.html',
  styleUrls: ['./simulation-tab.component.css']
})
export class SimulationTabComponent implements OnInit {
  climateData =  data;
  tempData = {
    "region": "Brazil",
    "year": "2019",
    "temperature": "25 Degree Celcius",
    "humidity": "35%",
    "precipitation": "450 PPM"
  }
  deforestationPrediction = new FormGroup({
    region: new FormControl(this.tempData.region)
  })

  constructor() { }

  ngOnInit() {
    console.log("DATA", data)

  }

  ngDoCheck() {
    const deforestationData = this.deforestationPrediction.value
    console.log("region docheck", deforestationData)
  }

  onSubmit() {
    console.log("ng on submit data", this.deforestationPrediction.value)
  }

}
