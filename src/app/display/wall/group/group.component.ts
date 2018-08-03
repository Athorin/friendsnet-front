import { Component, OnInit } from '@angular/core';
import { Group } from './group.model';
import { GroupService } from './group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  myGroup: Group[];
  gr: Group;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getGroupList()
    .subscribe(
      (data: Group[]) => this.myGroup = data,
      error => console.error(error),
      () => console.log('My Group list is loaded')
    );
  }

  addGroup(group: Group) {
    this.groupService.addGroup(group)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(Group => this.myGroup.push(group));
  }

  updateGroup(group: Group) {
    this.groupService.updateGroup(group).subscribe();
  }

  deleteGroup(group: Group) {
    this.groupService.deleteGroup(group.id)
      .subscribe(
        data => { this.myGroup = this.myGroup.filter( el => el.id !== group.id ); }
      );
  }

  getPeopleOf(group: Group) {
    this.groupService.getGroupById(group.id)
      .subscribe(
        data => { this.myGroup = this.myGroup.filter( el => el.id !== group.id ); },
        (data: Group) => this.gr = data
      );

     return this.gr.listOfPersons;
  }

}
