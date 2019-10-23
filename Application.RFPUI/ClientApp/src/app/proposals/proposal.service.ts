import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable()

export class ProposalService {

  constructor(private httpService: HttpService) { }

  public getProposals(): Observable<any> {
    return this.httpService.makeGetRequest('GetProposals');
  }

  public getProposalDetails(proposalID: any): Observable<any> {
    return this.httpService.makeGetRequest('GetProposals');
  }

  public addProposal(proposalData: any): Observable<any> {
    return this.httpService.makePostRequestforFormData('CreateProposal', proposalData);
  }
}
