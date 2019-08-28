import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.component.html',
  styleUrls: ['./new-proposal.component.css']
})
export class NewProposalComponent implements OnInit {

  newProposalForm: FormGroup;
  documents: FormArray;
  fileStream: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newProposalForm = this.formBuilder.group({
      requestType: new FormControl(''),
      title: new FormControl(''),
      customer: new FormControl(''),
      scope: new FormControl(''),
      description: new FormControl(''),
      additionalInformation: new FormControl(''),
      documents: this.formBuilder.array([this.createDocumentForm()])
    })
  }

  createDocumentForm(): FormGroup {
    return this.formBuilder.group({
      documentId:new FormControl('0'),
      document: new FormControl(''),
      documentStream: new FormControl('')
    })
  }

  fileInput(event: any, index: number) {
    let file = event.target.files[0];
    let fileName = file.name;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.fileStream = reader.result;
      alert(this.fileStream);
      let control = (<FormArray>this.newProposalForm.controls['documents']).at(index);
      control['controls'].document.setValue(fileName);
      control['controls'].documentStream.setValue(this.fileStream);
    }
  }

  addNewDocument() {
    this.documents = this.newProposalForm.get('documents') as FormArray;
    this.documents.push(this.createDocumentForm());
  }

  removeDocument(index: number) {
    this.documents = this.newProposalForm.get('documents') as FormArray;
    this.documents.removeAt(index);
  }

  submit() {
    console.log(this.newProposalForm);
    if (this.newProposalForm.valid) {

    } else {
      alert('Form is not valid');
    }
  }
  
}
