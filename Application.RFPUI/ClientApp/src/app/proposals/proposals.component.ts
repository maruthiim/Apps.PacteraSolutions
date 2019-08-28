import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSnackBar, MatSnackBarConfig, MatProgressSpinner, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ProposalRequest } from '../view-models/proposal-request-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {

  dataSource = new MatTableDataSource<ProposalRequest>();
  data: ProposalRequest[];
  filterText: string;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns = ['id', 'requestType', 'requestCode', 'title', 'status', 'scope', 'createdBy', 'createDate',
    'modifiedBy', 'mofdifiedDate'];


  constructor(private router: Router) {
    this.data = [];
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.filterText = filterValue;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.data = [
      {
        'id': 1,
        'requestType': 'Porposal',
        'requestCode': 'RFP001',
        'title': 'UPS',
        'status': 'Solution Build',
        'scope': 'Scuccess',
        'createdBy': 'Aravind',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Phani',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 2,
        'requestType': 'New Porposal',
        'requestCode': 'RFP002',
        'title': 'LMDO',
        'status': 'Initial Draft',
        'scope': 'Success',
        'createdBy': 'Phani',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Aravind',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 1,
        'requestType': 'Porposal',
        'requestCode': 'RFP001',
        'title': 'UPS',
        'status': 'Solution Build',
        'scope': 'Scuccess',
        'createdBy': 'Aravind',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Phani',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 2,
        'requestType': 'New Porposal',
        'requestCode': 'RFP002',
        'title': 'LMDO',
        'status': 'Initial Draft',
        'scope': 'Success',
        'createdBy': 'Phani',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Aravind',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 1,
        'requestType': 'Porposal',
        'requestCode': 'RFP001',
        'title': 'UPS',
        'status': 'Solution Build',
        'scope': 'Scuccess',
        'createdBy': 'Aravind',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Phani',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 2,
        'requestType': 'New Porposal',
        'requestCode': 'RFP002',
        'title': 'LMDO',
        'status': 'Initial Draft',
        'scope': 'Success',
        'createdBy': 'Phani',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Aravind',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 1,
        'requestType': 'Porposal',
        'requestCode': 'RFP001',
        'title': 'UPS',
        'status': 'Solution Build',
        'scope': 'Scuccess',
        'createdBy': 'Aravind',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Phani',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 2,
        'requestType': 'New Porposal',
        'requestCode': 'RFP002',
        'title': 'LMDO',
        'status': 'Initial Draft',
        'scope': 'Success',
        'createdBy': 'Phani',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Aravind',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 1,
        'requestType': 'Porposal',
        'requestCode': 'RFP001',
        'title': 'UPS',
        'status': 'Solution Build',
        'scope': 'Scuccess',
        'createdBy': 'Aravind',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Phani',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 2,
        'requestType': 'New Porposal',
        'requestCode': 'RFP002',
        'title': 'LMDO',
        'status': 'Initial Draft',
        'scope': 'Success',
        'createdBy': 'Phani',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Aravind',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 1,
        'requestType': 'Porposal',
        'requestCode': 'RFP001',
        'title': 'UPS',
        'status': 'Solution Build',
        'scope': 'Scuccess',
        'createdBy': 'Aravind',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Phani',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 2,
        'requestType': 'New Porposal',
        'requestCode': 'RFP002',
        'title': 'LMDO',
        'status': 'Initial Draft',
        'scope': 'Success',
        'createdBy': 'Phani',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Aravind',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 1,
        'requestType': 'Porposal',
        'requestCode': 'RFP001',
        'title': 'UPS',
        'status': 'Solution Build',
        'scope': 'Scuccess',
        'createdBy': 'Aravind',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Phani',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      },
      {
        'id': 2,
        'requestType': 'New Porposal',
        'requestCode': 'RFP002',
        'title': 'LMDO',
        'status': 'Initial Draft',
        'scope': 'Success',
        'createdBy': 'Phani',
        'createDate': '2019-07-26T02:39:49.47',
        'modifiedBy': 'Aravind',
        'mofdifiedDate': '2019-07-26T02:39:49.47',
        'description': 'Sample Description',
        'additionalInformation': 'Additional Information',
        'isCompleted': false,
        'documents': [{
          'documentId': 1,
          'documentName': 'Proposal Document1',
          'documentStream': 'document Stream'
        }]
      }
    ];

    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  newProposal() {
    this.router.navigate(['/Home/NewProposal']);
  }

}
