import { NgModule ,Component, OnInit } from '@angular/core';
import data from '../../../../app/data-set/yearsData.json';
@Component({
  selector: 'app-deforstation-panel',
  templateUrl: './deforstation-panel.component.html',
  styleUrls: ['./deforstation-panel.component.css']
})
export class DeforstationPanelComponent implements OnInit {
  actualTimeFlag: boolean = false;
  simulationFlag: boolean = true;
  climateData =  data;
  selectedLevel: any;

  constructor() { }

  ngOnInit(): void {
    console.log("JSON", data)
    console.log("JSON data", this.climateData)
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
    console.log('====', this.selectedLevel)
  }

}
