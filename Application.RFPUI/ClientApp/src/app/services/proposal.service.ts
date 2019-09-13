import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../global/http.service';

@Injectable()

export class ProposalService {

  constructor(private httpService: HttpService) { }

  public getProposals(): Observable<any> {
    return this.httpService.makeGetRequest('api/........');
  }

  public getProposalDetails(proposalID: any): Observable<any> {
    return this.httpService.makeGetRequest('api/........');
  }

  public addProposal(proposalData: any): Observable<any> {
    return this.httpService.makePostRequestforFormData('CreateProposal', proposalData);
  }
}
