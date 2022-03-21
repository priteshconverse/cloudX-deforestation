import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DeforestationDataService } from '../../../../services/deforestation-data.service'

@Component({
  selector: 'app-actual-time-tab',
  templateUrl: './actual-time-tab.component.html',
  styleUrls: ['./actual-time-tab.component.css']
})
export class ActualTimeTabComponent implements OnInit {
  dataSub:any;
  climateData: any;

  constructor(
    private deforestationDataService: DeforestationDataService
  ) { }

  ngOnInit() {
    this.dataSub = this.deforestationDataService.singleYearDataObs.subscribe(data => {
      this.climateData = data;
    })
  }

}
