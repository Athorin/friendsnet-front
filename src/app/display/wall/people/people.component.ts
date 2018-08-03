import { Component, OnInit } from '@angular/core';
import { People } from './people.model';
import { PeopleListService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  myPeople: People[];
  person: People;

  constructor(private peopleListService: PeopleListService) { }

  ngOnInit() {
    this.peopleListService.getPeopleList()
      .subscribe(
        (data: People[]) => this.myPeople = data,
        error => console.error(error),
        () => console.log('My People list is loaded')
      );
  }

  addPerson(person: People) {
    this.peopleListService.addPeople(person)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(person => this.myPeople.push(person));
  }

  updatePerson(person: People) {
    this.peopleListService.updatePeople(person).subscribe();
  }

  deletePerson(person: People) {
    this.peopleListService.deletePeople(person.id)
      .subscribe(
        data => { this.myPeople = this.myPeople.filter( el => el.id !== person.id ); }
      );
  }

  addFriend(person: People) { // UNDER CONSTRUCTION
    this.peopleListService.getPersonById(person.id)
      .subscribe(
        data => {this.myPeople = this.myPeople.filter( el => el.id !== person.id ); },
        (data: People) => this.person = data
      );

  }


}
