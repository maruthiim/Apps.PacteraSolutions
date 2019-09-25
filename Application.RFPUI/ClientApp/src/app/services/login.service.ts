import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../global/http.service';

@Injectable()

export class LoginService {

  constructor(private httpService: HttpService) { }

  public login(data: FormData): Observable<any> {
    return this.httpService.makePostRequestforFormData('api/........');
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
