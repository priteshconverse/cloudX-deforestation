import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from '../../assets/data-set/climateData.json';

@Injectable({
  providedIn: 'root'
})
export class DeforestationDataService {
  private singleYearData = new BehaviorSubject<object>({});
  climateData =  data;


  // accessible outside of the service as an observable
  singleYearDataObs = this.singleYearData.asObservable();


  setYear(year: string, date:string) {
    console.log("regional yearr --==", year)
    console.log("date in service", date)

    const currentYear = date.substring(0,4);
    const currentMonth = date.substring(5,7);

    console.log("month", currentMonth)
    console.log("CURRENT YEAR==", currentYear)

    console.log("data objectsss", this.climateData)

    for (const data of this.climateData) {
      if (year === data.year && currentMonth === data.month) {
        console.log("selected year/month dtaa", data)
        this.singleYearData.next(data);
      }
    }
  }
}
