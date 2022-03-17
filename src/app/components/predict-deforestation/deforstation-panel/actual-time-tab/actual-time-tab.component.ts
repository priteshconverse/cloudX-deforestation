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
  // localDate: string = new Date().toLocaleDateString();
  // currentYear: any;

  constructor(
    private deforestationDataService: DeforestationDataService,
    // public datePipe : DatePipe
  ) { }

  ngOnInit() {
    this.dataSub = this.deforestationDataService.singleYearDataObs.subscribe(data => {
      this.climateData = data;
      console.log("climate data ===>>>>>", this.climateData)
      // this.currentYear = this.localDate.substring(this.localDate.length - 4);
      // console.log("CURRENT YEAR", this.currentYear)
    })
  }

}
