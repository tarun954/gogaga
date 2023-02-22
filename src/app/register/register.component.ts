import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { showPopup } from '@syncfusion/ej2/inplace-editor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  UserRegisterForm : FormGroup
  constructor(){
    this.UserRegisterForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      email : new FormControl ('',[Validators.email,Validators.required]),
      password : new FormControl('',[Validators.required])
    })

  }
  OnSubmit(){
    console.log("User is Created",this.UserRegisterForm.value)
    alert("User is Created")
  }
}
