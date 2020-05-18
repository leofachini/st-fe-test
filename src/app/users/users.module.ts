import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserService } from "./user.service";
import { UsersComponent } from "./users.component";

@NgModule({
  imports: [SharedModule],
  providers: [UserService],
  declarations: [UserFormComponent, UserListComponent, UsersComponent],
  exports: [UsersComponent],
})
export class UsersModule {}
