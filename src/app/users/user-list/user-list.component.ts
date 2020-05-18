import { Component, Input } from '@angular/core';

import { User } from '../user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {

  @Input()
  users: User[];

  isEditAllMode: boolean = false;
  readState: boolean = true;

  editAll(): void {
    this.isEditAllMode = true;
  }

  removeUserFromList(index: number): void {
    this.users.splice(index, 1);
  }

  clearList(): void {
    this.users.length = 0;
    // Or you could use this.users.splice(0,this.users.length)
  }

  editUser(user): void {
    user.isInEditMode = true;
  }

  saveUser(user): void {
    user.isInEditMode = false;
  }

}
