import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'quotes/:id', component: QuotesComponent },
  { path: 'quotes/:id/create', component: CreateQuoteComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
