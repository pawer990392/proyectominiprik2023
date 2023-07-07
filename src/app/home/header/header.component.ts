import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  @Output() toggleSidebarForMe : EventEmitter<any> = new EventEmitter();

  user: string = 'Miguel';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Salir Sesion');
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
