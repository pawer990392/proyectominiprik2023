import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MenulistComponent } from './menulist/menulist.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    MenulistComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }