import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ProposalData } from '../global/data-json';

@Component({
  selector: 'app-view-proposal',
  templateUrl: './view-proposal.component.html',
  styleUrls: ['./view-proposal.component.css']
})
export class ViewProposalComponent implements OnInit {

  RequestJourney: any[];
  journeyData: any;
  proposalForm: FormGroup;
  documentsForm: FormArray;
  scheduleForm: FormArray;
  questionnaireForm: FormArray;
  questionForm: FormArray;
  fileStream: any;

  proposaldata: any = [];
  existingDocuments: any;

  constructor(private formBuilder: FormBuilder) {
    this.proposaldata = ProposalData;
    this.journeyData = [
      {
        step: 1
      },
      {
        step: 2
      },
      {
        step: 3
      },
      {
        step: 4
      },
      {
        step: 5
      },
      {
        step: 6
      }
    ];
    this.RequestJourney = [
          {
            Name: 'Stage 1',
            status: 'Completed',
            statusId: 3,
            dateTime: '09-08-2019'
          },
          {
            Name: 'Stage 2',
            status: 'Completed',
            statusId: 3,
            dateTime: '09-08-2019'
          },
          {
            Name: 'Stage 3',
            status: 'Cancelled',
            statusId: 4,
            dateTime: '09-08-2019',
          },
          {
            Name: 'Stage 4',
            status: 'In Progress',
            statusId: 2,
            dateTime: 'Date',
          },
          {
            Name: 'Stage 5',
            status: 'Not Started',
            statusId: 1,
            dateTime: 'Date',
          }
        ];
  }

  ngOnInit() {
    this.createForm();
    this.dataLoad(this.proposaldata);
  }

  dataLoad(data: any) {
    if (data) {
      if (data.schedule.length > 0) {
        this.removeSchedule(0);
        for (let i = 0; i < data.schedule.length; i++) {
          this.addNewSchedule();
        }
      }
      if (data.documents.length > 0) {
        this.removeDocument(0);
        this.existingDocuments = data.documents;
        // for (let i = 0; i < data.documents.length; i++) {
        //  this.addNewDocument();
        // }
      }
      if (data.questionnaire.length > 0) {
        this.removeQuestionnaire(0);
        for (let i = 0; i < data.questionnaire.length; i++) {
          this.addNewQuestionnaire();
          if (data.documents.length > 0) {
            this.removeQuestion(i, 0);
            for (let j = 0; j < data.questionnaire[i].questions.length; j++) {
              this.addNewQuestion(i);
            }
          }
        }
      }
      this.proposalForm.patchValue(data);
    }
  }

  createForm() {
    this.proposalForm = this.formBuilder.group({
      RFPID: new FormControl('0'),
      requestType: new FormControl(''),
      customer: new FormControl(''),
      location: new FormControl(''),
      requestedDate: new FormControl(''),
      title: new FormControl(''),
      scope: new FormControl(''),
      description: new FormControl(''),
      additionalInformation: new FormControl(''),
      schedule: this.formBuilder.array([this.createScheduleForm()]),
      documents: this.formBuilder.array([this.createDocumentForm()]),
      questionnaire: this.formBuilder.array([this.createQuestionnaireForm()])
    });
  }

  createScheduleForm(): FormGroup {
    return this.formBuilder.group({
      scheduleID: new FormControl('0'),
      milestone: new FormControl(''),
      scheduleStartDate: new FormControl(''),
      scheduleEndDate: new FormControl(''),
      remarks: new FormControl('')
    });
  }

  createDocumentForm(): FormGroup {
    return this.formBuilder.group({
      documentId: new FormControl('0'),
      documentName: new FormControl(''),
      documentExt: new FormControl(''),
      documentType: new FormControl(''),
      documentStream: new FormControl('')
    });
  }

  createQuestionnaireForm(): FormGroup {
    return this.formBuilder.group({
      questionnaireID: new FormControl('0'),
      questionnaireArea: new FormControl(''),
      questions: this.formBuilder.array([this.createQuestionsForm()])
    });
  }

  createQuestionsForm(): FormGroup {
    return this.formBuilder.group({
      questionID: new FormControl('0'),
      question: new FormControl(''),
      answer: new FormControl('')
    });
  }

  fileInput(event: any, index: number) {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileExt = fileName.split('.').pop();
    const fileType = file.type;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.fileStream = reader.result;
      const control = (<FormArray>this.proposalForm.controls['documents']).at(index);
      control['controls'].documentName.setValue(fileName);
      control['controls'].documentExt.setValue(fileExt);
      control['controls'].documentType.setValue(fileType);
      control['controls'].documentStream.setValue(this.fileStream);
    };
  }

  addNewDocument() {
    this.documentsForm = this.proposalForm.get('documents') as FormArray;
    this.documentsForm.push(this.createDocumentForm());
  }

  removeDocument(index: number) {
    this.documentsForm = this.proposalForm.get('documents') as FormArray;
    this.documentsForm.removeAt(index);
  }

  addNewSchedule() {
    this.scheduleForm = this.proposalForm.get('schedule') as FormArray;
    this.scheduleForm.push(this.createScheduleForm());
  }

  removeSchedule(index: number) {
    this.scheduleForm = this.proposalForm.get('schedule') as FormArray;
    this.scheduleForm.removeAt(index);
  }

  addNewQuestionnaire() {
    this.questionnaireForm = this.proposalForm.get('questionnaire') as FormArray;
    this.questionnaireForm.push(this.createQuestionnaireForm());
  }

  removeQuestionnaire(index: number) {
    this.questionnaireForm = this.proposalForm.get('questionnaire') as FormArray;
    this.questionnaireForm.removeAt(index);
  }

  addNewQuestion(parentIndex: number) {
    const questionnaireArray = this.proposalForm.get('questionnaire') as FormArray;
    const questionsArray = questionnaireArray.at(parentIndex).get('questions') as FormArray;
    questionsArray.push(this.createQuestionsForm());
  }

  removeQuestion(parentIndex: number, index: number) {
    const questionnaireArray = this.proposalForm.get('questionnaire') as FormArray;
    const questionsArray = questionnaireArray.at(parentIndex).get('questions') as FormArray;
    questionsArray.removeAt(index);
  }

  submit() {
    console.log(this.proposalForm);
    if (this.proposalForm.valid) {
      console.log((<any>Object).assign({}, this.proposalForm.value));
      console.log(this.proposalForm);
    } else {
      alert('Form is not valid');
    }
  }

  getProcessImage(status: any) {
    if (status === 1) {
      return '../../assets/images/time3.png';
    } else if (status === 2) {
      return '../../assets/images/pending2.png';
    } else if (status === 3) {
      return '../../assets/images/correct2.png';
    } else if (status === 4) {
      return '../../assets/images/cross3.png';
    } else {
      return '../../assets/images/timeline.svg';
    }
  }

  getDocumentImage(docExt: string) {
    if (docExt === 'jpg') {
      return '../../assets/images/FileFormats/JPG.svg';
    } else if (docExt === 'pptx') {
      return '../../assets/images/FileFormats/PPT.svg';
    } else {
      return '../../assets/images/FileFormats/FILE.svg';
    }
  }

}
