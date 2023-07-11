import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

//rutas principales de nuestra App
//tos los module van en los imports
const routes: Routes = [

  {
    path:'usuarios',
    loadChildren:()=>import('./usuarios/usuarios.module').then(m=>m.UsuariosModule)
  },
  { 
    path:'**',
    redirectTo:'usuarios'

  }
];

@NgModule({
  //defini mis rutas principasles
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
