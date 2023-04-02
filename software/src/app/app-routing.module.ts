import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CurrencyComponent} from "./components/currency/currency.component";
import {ErrorComponent} from "./components/error/error.component";
import {AuthGuard} from "./guard/auth.guard";
import {ListComponent} from "./components/list/list.component";

const routes: Routes = [
  {path: '', component: CurrencyComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard]},
  {path: 'lista', component: ListComponent, data: {roles: ['USER']}, canActivate: [AuthGuard]},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
