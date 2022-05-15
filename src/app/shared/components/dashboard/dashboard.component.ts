import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ISymbol } from '../../models/interfaces/ISymbol';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  images: ISymbol[] = [];

  constructor(private cookies: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.images = [
      { "name": "kreis" },
      { "name": "kreuz" },
      { "name": "plus" },
      { "name": "gefuelltestKreuz" },
      { "name": "gefuellterKreis" },
      { "name": "viereck" },
      { "name": "dreieck" }
  ]
  }
  
  ngOnInit(): void {
    
  }



  onPlay(form: NgForm) {
    /* this.router.navigate(['tictactoe', {userOne: String(form.value.userOne), symbolOne: String(form.value.symbolOne), userTwo: String(form.value.userTwo), symbolTwo: String(form.value.symbolTwo)}]); */ // TODO funktioniert nicht: optionale routing parameter (kp warum)
    let userOne = String(form.value.userOne);
    let symbolOne = String(form.value.symbolOne);
    let userTwo = String(form.value.userTwo);
    let symbolTwo = String(form.value.symbolTwo);
    
    if (userOne && symbolOne && userTwo && symbolTwo)
      this.router.navigate(['tictactoe', userOne, symbolOne, userTwo, symbolTwo]);
  }

}
