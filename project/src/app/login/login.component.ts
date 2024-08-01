import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private router:Router,
    private auth:AuthService

  ){}
username:any
password:any

ngOnInit(): void {
  console.log("Login init")
}

login(){
  console.log(this.username)
  console.log(this.password)
  this.auth.login(this.username,this.password)
  this.router.navigate(['/home'])
  console.log("hello")
}

}
