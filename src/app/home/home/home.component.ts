import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  siderbarOpen=true;

  //https://www.youtube.com/watch?v=1GUsmQKMnuU
  ngOnInit(){

  }
  sideBarToggler(){
    this.siderbarOpen=!this.siderbarOpen;
  }


}
