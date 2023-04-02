import { Component } from '@angular/core';
import {ListDto} from "../../dto/list.dto";
import {CurrencyService} from "../../service/currency.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listDtos:ListDto[]
  pages:number=0
  total:number=0
  constructor(private service:CurrencyService, private router: Router) {
  }
  goCurrency() {
    this.router.navigateByUrl('');
  }
  ngOnInit(){
    this.service.listCurrency(this.pages).subscribe({
      next:data=>{
        this.listDtos=data['content'];
        this.total=data['totalPages'];
      }
    })
  }
  increment(){
    if(this.pages<this.total){
      this.pages++
      this.service.listCurrency(this.pages).subscribe({
        next:data=>{
          this.listDtos=data['content'];
          this.total=data['totalPages'];
        }
      })
    }
  }
  decrement(){
    if(this.pages!=0){
      this.pages--
      this.service.listCurrency(this.pages).subscribe({
        next:data=>{
          this.listDtos=data['content'];
          this.total=data['totalPages'];
        }
      })
    }
  }

  displayedColumns: string[] = ['id', 'currencyFrom', 'currencyTo', 'amount', 'date', 'result'];
}
