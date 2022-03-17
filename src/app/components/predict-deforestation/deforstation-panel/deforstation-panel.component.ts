import { NgModule ,Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeforestationDataService } from '../../../services/deforestation-data.service'
import data from '../../../../../src/assets/data-set/yearsData.json';

@Component({
  selector: 'app-deforstation-panel',
  templateUrl: './deforstation-panel.component.html',
  styleUrls: ['./deforstation-panel.component.css']
})
export class DeforstationPanelComponent implements OnInit {
  actualTimeFlag: boolean = true;
  simulationFlag: boolean = false;
  climateData =  data;
  selectedYearData: any;
  localDate: string = new Date().toLocaleDateString();
  currentYear: any;

  constructor(
    private deforestationDataService : DeforestationDataService
  ) { }

  ngOnInit(): void {
    // console.log("JSON", data)
    // console.log("JSON data", this.climateData)
    this.currentYear = this.localDate.substring(this.localDate.length - 4);
    console.log("CURRENT YEAR==", this.currentYear)
    this.selectedYearData = {
      year: this.currentYear-1
    } 
    console.log("Selected tea datta ++++", this.selectedYearData  )
  }

  actualTime() {
    this.actualTimeFlag = true;
    this.simulationFlag = false;
    // const activeClass = document.querySelector(".tablinks");
    // activeClass?.className += ' active'
  }
  
  simulation() {
    this.actualTimeFlag = false;
    this.simulationFlag = true;
  }

  selected() {
    console.log('====', this.selectedYearData);
    this.deforestationDataService.setYear(this.selectedYearData)
    if (this.selectedYearData.year === this.currentYear) {
      this.simulation();
    } else {
      this.actualTime();
    }
  }

}
