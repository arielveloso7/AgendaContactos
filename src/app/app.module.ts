import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AddContactsComponent } from './components/schedule/add-contacts/add-contacts.component';
import { ListContactsComponent } from './components/schedule/list-contacts/list-contacts.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    AddContactsComponent,
    ListContactsComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
