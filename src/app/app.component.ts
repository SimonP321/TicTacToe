import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TicTacToe';
  imgO = "./assets/o.png";
  empty = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/2048px-Solid_white.svg.png";
  fields: string[] = Array(9);
  constructor() {
    console.log(this.fields.length)
  }

  changeImg(){
    this.imgO = "https://img.freepik.com/freie-ikonen/x-symbol_318-1407.jpg"
  }

}
