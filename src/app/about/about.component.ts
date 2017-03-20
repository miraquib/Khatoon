import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  myForm: FormGroup;
  constructor(){
    this.myForm = new FormGroup({
      'comment' : new FormArray ([ new FormControl ('Please enter your Text',Validators.required )] )

    });

  }

  onAddComment(){
    (<FormArray>this.myForm.controls['comment']).push(new FormControl('', Validators.required));
  }
  onSubmitAD(){}

}
