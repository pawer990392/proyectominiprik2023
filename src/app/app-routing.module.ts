import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

//rutasprincipales de nuestra App
const routes: Routes = [

  {
    path:'home',
    loadChildren:()=>import('./usuarios/usuarios.module').then(m=>m.UsuariosModule)
  },
  {
    path:'**',
    redirectTo:'home'

  }
];

@NgModule({
  //defini mis rutas principasles
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
