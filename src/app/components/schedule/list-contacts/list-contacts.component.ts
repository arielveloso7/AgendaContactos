import { Contacts } from './../../../interfaces/contacts';
import { Component, OnInit } from '@angular/core';
import { ContactService } from './../../../services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  public listContacts: Contacts[];

  constructor(private ContactService: ContactService
  ) {

    this.listContacts = [];
  }

  ngOnInit(): void {

    if (this.ContactService.listContacts.length > 0) {
      this.listContacts = this.ContactService.listContacts;
    } else {
      this.ContactService.getData('assets/data/contacts.json').subscribe(list => {
        this.listContacts = list;
      })
    }

    console.log(this.ContactService.listContacts);

  }

}
