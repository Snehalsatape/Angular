import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private auth :AuthService){}
    canActivate(){
    if(this.auth.isLoggedIn()){
      return true
    }else{
      return false
    }
  }

}