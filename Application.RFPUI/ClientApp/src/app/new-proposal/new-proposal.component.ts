import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.css']
})
export class NewProposalComponent implements OnInit {

  newProposalForm: FormGroup;
  documentsForm: FormArray;
  scheduleForm: FormArray;
  questionnaireForm: FormArray;
  questionForm: FormArray;
  fileStream: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newProposalForm = this.formBuilder.group({
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
      alert(this.fileStream);
      const control = (<FormArray>this.newProposalForm.controls['documents']).at(index);
      control['controls'].documentName.setValue(fileName);
      control['controls'].documentExt.setValue(fileExt);
      control['controls'].documentType.setValue(fileType);
      control['controls'].documentStream.setValue(this.fileStream);
    };
  }

  addNewDocument() {
    this.documentsForm = this.newProposalForm.get('documents') as FormArray;
    this.documentsForm.push(this.createDocumentForm());
  }

  removeDocument(index: number) {
    this.documentsForm = this.newProposalForm.get('documents') as FormArray;
    this.documentsForm.removeAt(index);
  }

  addNewSchedule() {
    this.scheduleForm = this.newProposalForm.get('schedule') as FormArray;
    this.scheduleForm.push(this.createScheduleForm());
  }

  removeSchedule(index: number) {
    this.scheduleForm = this.newProposalForm.get('schedule') as FormArray;
    this.scheduleForm.removeAt(index);
  }

  addNewQuestionnaire() {
    this.questionnaireForm = this.newProposalForm.get('questionnaire') as FormArray;
    this.questionnaireForm.push(this.createQuestionnaireForm());
  }

  removeQuestionnaire(index: number) {
    this.questionnaireForm = this.newProposalForm.get('questionnaire') as FormArray;
    this.questionnaireForm.removeAt(index);
  }

  addNewQuestion(parentIndex: number) {
    const questionnaireArray = this.newProposalForm.get('questionnaire') as FormArray;
    const questionsArray = questionnaireArray.at(parentIndex).get('questions') as FormArray;
    questionsArray.push(this.createQuestionsForm());
  }

  removeQuestion(parentIndex: number, index: number) {
    const questionnaireArray = this.newProposalForm.get('questionnaire') as FormArray;
    const questionsArray = questionnaireArray.at(parentIndex).get('questions') as FormArray;
    questionsArray.removeAt(index);
  }

  submit() {
    console.log(this.newProposalForm);
    if (this.newProposalForm.valid) {
      console.log((<any>Object).assign({}, this.newProposalForm.value));
      console.log(this.newProposalForm);
    } else {
      alert('Form is not valid');
    }
  }
}

