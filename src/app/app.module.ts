import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AadInvoiceComponent } from './aad-invoice/aad-invoice.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { HomeComponent } from './components/home/home.component';
import { IncoiceComponent } from './components/incoice/incoice.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AadInvoiceComponent,
    AddInvoiceComponent,
    HomeComponent,
    IncoiceComponent,
    InvoicesListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
