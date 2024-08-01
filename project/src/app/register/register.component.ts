import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  constructor(private formBuilder:FormBuilder){}

registrationForm!:FormGroup
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username:[null,[Validators.required,Validators.email]],
      password:[null,Validators.minLength(6)]
    })
  }

  handleSubmit(){
    console.log(this.registrationForm.value.username)
  }
}
