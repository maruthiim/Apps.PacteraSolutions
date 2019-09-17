import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../global/http.service';

@Injectable()

export class LoginService {

  constructor(private httpService: HttpService) { }

  public login(data: FormData): Observable<any> {
    return this.httpService.makePostRequestforFormData('api/........');
  }
}
