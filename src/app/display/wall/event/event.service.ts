import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from './event.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  URL_BASE = 'http://localhost:3000/event-list';

  getEventList() {
      return this.http.get(this.URL_BASE);
  }

  getEventById(id: number) {
    const url = `${this.URL_BASE}/${id}`;
    return this.http.get(url, httpOptions);
  }

  addEvent(event: Event): Observable<Event> {
      return this.http.post<Event>(this.URL_BASE, event, httpOptions);
  }

  updateEvent (event: Event): Observable<Event> {
      const url = `${this.URL_BASE}/${event.id}`;
      return this.http.put<Event>(url, event, httpOptions);
  }

  deleteEvent(id: number): Observable<{}> {
      const url = `${this.URL_BASE}/${id}`;
      return this.http.delete(url, httpOptions);
  }
}
