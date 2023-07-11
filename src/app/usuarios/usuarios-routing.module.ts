import { NgModule } from '@angular/core';
import { Route, Routes ,RouterModule} from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';

//rutas secundarias delm modulo usairio
const routes:Routes=[
  
  {
    path:'', 
    children:[
      {
        path:'CrearUser',
        component:UserCreateComponent
      },
      {
        path:'EditarUser',
        component:UserEditComponent
      },
      {
        path:'userList',
        component:UserEditComponent
      },
      //crear un comodin
      {
        path:'**',
        redirectTo:'userList'
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UsuariosRoutingModule { }
