import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from './group.model';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) { }


  URL_BASE = 'http://localhost:3000/group-list';

  getGroupList() {
      return this.http.get(this.URL_BASE);
  }

  getGroupById(id: number) {
    const url = `${this.URL_BASE}/${id}`;
    return this.http.get(url, httpOptions);
  }

  addGroup(group: Group): Observable<Group> {
      return this.http.post<Group>(this.URL_BASE, group, httpOptions);
  }

  updateGroup (group: Group): Observable<Group> {
      const url = `${this.URL_BASE}/${group.id}`;
      return this.http.put<Group>(url, group, httpOptions);
  }

  deleteGroup(id: number): Observable<{}> {
      const url = `${this.URL_BASE}/${id}`;
      return this.http.delete(url, httpOptions);
  }
}
