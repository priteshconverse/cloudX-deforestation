import { NgModule ,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deforstation-panel',
  templateUrl: './deforstation-panel.component.html',
  styleUrls: ['./deforstation-panel.component.css']
})
export class DeforstationPanelComponent implements OnInit {
  actualTimeFlag: boolean = true;
  simulationFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  actualTime() {
    this.actualTimeFlag = true;
    this.simulationFlag = false;
  }
  
  simulation() {
    this.actualTimeFlag = false;
    this.simulationFlag = true;
  }

}
