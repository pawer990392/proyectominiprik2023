import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LoginModule { }
