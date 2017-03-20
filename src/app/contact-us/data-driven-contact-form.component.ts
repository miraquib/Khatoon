import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-data-driven-contact-form',
  templateUrl: './data-driven-contact-form.component.html',
  styleUrls: ['./data-driven-contact-form.component.css']
})
export class DataDrivenContactFormComponent {

  myForm: FormGroup;
  genders = [
    'Male',
    'Female'
  ];



  constructor(){
    this.myForm = new FormGroup({
      'username' : new FormControl('',Validators.required),
      'email' : new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'phone' : new FormControl('', Validators.required),
      'gender': new FormControl('Male')
      });

  }

  onSubmitDD(){
    console.log(this.myForm);
  }

}
