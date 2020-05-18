import { Component, OnInit } from '@angular/core';

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  isEditAllMode: boolean = false;
  readState: boolean = true;
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsersList()
      .subscribe(users => this.users = users);
  }


  editAll(): void {
    this.isEditAllMode = true;
  }

  removeUserFromList(index: number): void {
    this.users.splice(index, 1);
  }

}
