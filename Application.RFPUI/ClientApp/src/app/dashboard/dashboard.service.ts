import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpService: HttpService) { }

  public getChartData() {
    return this.httpService.makeGetRequest('GetDataViz');
  }

}
