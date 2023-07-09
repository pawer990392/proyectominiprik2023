import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule
  ]
})
export class UsuariosModule { }
