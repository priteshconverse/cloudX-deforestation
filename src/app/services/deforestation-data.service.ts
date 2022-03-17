import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeforestationDataService {
  private singleYearData = new BehaviorSubject<object>({});

  // accessible outside of the service as an observable
  singleYearDataObs = this.singleYearData.asObservable();


  setYear(data: object) {
    // this.regionalData = data;
    console.log("regional data --==", data)
    this.singleYearData.next(data);
    return data
  }
}
