import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable()

export class LoginService {

  constructor(private httpService: HttpService,
              private httpClient: HttpClient ) { }

  public userData: any;
  public API_URL = environment.API_URL;

  public login(data: FormData): Observable<any> {
    return this.httpService.makePostRequestforFormData('Authenticate', data);
  }



  public logout() {
    sessionStorage.clear();
  }

  public setSessionStorage(name: string, value: string) {
    sessionStorage.setItem(name, value);
  }

  public getSessionStorage(name: string) {
    return sessionStorage.getItem(name);
  }

  public isUserLoggedIn() {
    let token = this.getSessionStorage('token');
    if (token && token !== '') {
      return true;
    } else {
      return false;
    }
  }
}
