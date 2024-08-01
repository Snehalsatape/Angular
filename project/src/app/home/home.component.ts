import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private apiservice:ApiService){}
  products:any

  ngOnInit
  ():void{
    this.apiservice.getProducts().subscribe(data=>{
      this.products = data
      console.log(this.products)
    })
  }

}
