export class ProposalRequest {
  id: number;
  requestType: string;
  requestCode: string;
  title: string;
  status: string;
  scope: string;
  createdBy: string;
  createDate: string;
  modifiedBy: string;
  mofdifiedDate: string;
  description: string;
  additionalInformation: string;
  isCompleted: boolean;
  documents: ProposalDocuments[];
}

export class ProposalDocuments {
  documentId: number;
  documentName: string;
  documentStream: string;
}
