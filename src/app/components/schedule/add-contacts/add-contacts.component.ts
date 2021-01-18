import { ContactService } from './../../../services/contact.service';
import { Contacts } from './../../../interfaces/contacts';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {

  public contact: Contacts;

  constructor(private ContactService: ContactService,
    private router: Router
  ) {

    this.contact = {
      name: '',
      surname: '',
      description: '',
      sex: '',
      email: '',
      telephone: '',
      company: ''
    }

  }

  ngOnInit(): void {
  }

  addContact() {

    console.log(this.contact)
    this.ContactService.addContact(this.contact);
    this.router.navigate(['/list-contact']);

  }

}
