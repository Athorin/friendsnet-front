import { Component, OnInit } from '@angular/core';
import { People } from '../wall/people/people.model';
import { PeopleListService } from '../wall/people/people.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  person: People;

  constructor(private peopleListService: PeopleListService) { }

  ngOnInit() {
    this.peopleListService.getPeopleList()
      .subscribe(
        (data: People[]) => this.person = data[0],
        error => console.error(error),
        () => console.log('My PeRSON is loaded')
      );
  }


  getFriends(person: People): number {
    return person.friends.length;
  }

  getProfile() {
    return this.person;
  }

}
