import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CurrencyService} from "./service/currency.service";
import {ResponseCurrencyDto} from "./dto/response.currency.dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curreny-Software';

}
