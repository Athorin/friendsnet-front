import { People } from './people.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


@Injectable()
export class PeopleListService {

constructor (private http: HttpClient) {}

    URL_BASE = 'http://localhost:3000/people-list';

    getPeopleList() {
        return this.http.get(this.URL_BASE);
    }

    getPersonById(id: number) {
        const url = `${this.URL_BASE}/${id}`;
        return this.http.get(url);
    }

    addPeople(people: People): Observable<People> {
        return this.http.post<People>(this.URL_BASE, people, httpOptions);
    }

    updatePeople (people: People): Observable<People> {
        const url = `${this.URL_BASE}/${people.id}`;
        return this.http.put<People>(url, people, httpOptions);
    }

    deletePeople(id: number): Observable<{}> {
        const url = `${this.URL_BASE}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    addFriend(friend: People): Observable<People> {
        const url = `${this.URL_BASE}/${friend.id}`; // UNDER CONSTRUCTION
        return this.http.post<People>(url, friend, httpOptions);
    }

}
