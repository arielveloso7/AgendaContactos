import { ListContactsComponent } from './components/schedule/list-contacts/list-contacts.component';
import { AddContactsComponent } from './components/schedule/add-contacts/add-contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'add-contacts', component: AddContactsComponent },
  { path: 'list-contacts', component: ListContactsComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'list-contacts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
