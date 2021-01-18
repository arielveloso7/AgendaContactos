
import { Contacts } from './../interfaces/contacts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _listContats: Contacts[];


  constructor(private http: HttpClient) {

    this._listContats = [];

  }

  get listContacts(): Contacts[] {

    return this._listContats;

  }

  addContact(contacto) {

    this._listContats.push(contacto);

  }

  getData(path: string) {
    return this.http.get<Contacts[]>(path).pipe(
      map(list => {
        this._listContats = list;
        return list;
      })
    );
  }

}
