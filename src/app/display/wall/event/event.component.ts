import { Component, OnInit } from '@angular/core';

import { Event } from './event.model';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  myEvent: Event[];
  eve: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEventList()
    .subscribe(
      (data: Event[]) => this.myEvent = data,
      error => console.error(error),
      () => console.log('My Event list is loaded')
    );
  }


  addEvent(event: Event) {
    this.eventService.addEvent(event)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(event => this.myEvent.push(event));
  }

  updateEvent(event: Event) {
    this.eventService.updateEvent(event).subscribe();
  }

  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.id)
      .subscribe(
        data => { this.myEvent = this.myEvent.filter( el => el.id !== event.id ); }
      );
  }

  getPeopleOf(event: Event) {
    this.eventService.getEventById(event.id)
      .subscribe(
        data => { this.myEvent = this.myEvent.filter( el => el.id !== event.id ); },
        (data: Event) => this.eve = data
      );

     return this.eve.listOfPersons;
  }

  getPostsOf(event: Event) {
    this.eventService.getEventById(event.id)
      .subscribe(
        data => { this.myEvent = this.myEvent.filter( el => el.id !== event.id ); },
        (data: Event) => this.eve = data
      );

     return this.eve.listOfPosts;
  }

}
