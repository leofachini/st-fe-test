
import { NgModule }       from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';

import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent }    from './users.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [
    UserService,
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
    UsersComponent,
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule {}
