import { NgModule ,Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeforestationDataService } from '../../../services/deforestation-data.service'
import data from '../../../../../src/assets/data-set/climateData.json';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-deforstation-panel',
  templateUrl: './deforstation-panel.component.html',
  styleUrls: ['./deforstation-panel.component.css']
})
export class DeforstationPanelComponent implements OnInit {
  actualTimeFlag: boolean = true;
  simulationFlag: boolean = false;
  climateData =  data;
  selectedYear: any;
  localDate: any;
  currentYear: any;
  currentMonth: any;
  yearDropDownData = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];

  constructor(
    private deforestationDataService : DeforestationDataService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    var date = new Date();
    this.localDate = this.datePipe.transform(date,"yyyy-MM-dd")
    console.log("local date", this.localDate)
    this.currentYear = this.localDate.substring(0,4);
    this.currentMonth = this.localDate.substring(5,7);

    // console.log("month", this.currentMonth)
    // console.log("CURRENT YEAR==", this.currentYear)
    // this.yearDropDownData = [...new Set(this.climateData.map(item => item.year))];
    // console.log("uniques data ===>>>>>>>>>>>>>>>>", this.yearDropDownData)


  }

  actualTime() {
    this.actualTimeFlag = true;
    this.simulationFlag = false;
  }
  
  simulation() {
    this.actualTimeFlag = false;
    this.simulationFlag = true;
  }

  selected() {
    console.log(' selected year====--', this.selectedYear);
    this.deforestationDataService.setYear(this.selectedYear, this.localDate)
    if (this.selectedYear > this.currentYear) {
      this.simulation();
    } else {
      this.actualTime();
    }
    
  }

}
