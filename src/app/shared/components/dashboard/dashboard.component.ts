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
    console.log(form.value.usernameOne);
    /* this.router.navigate(['tictactoe', {userOne: String(form.value.userOne), symbolOne: String(form.value.symbolOne), userTwo: String(form.value.userTwo), symbolTwo: String(form.value.symbolTwo)}]); */ // TODO funktioniert nicht (kp warum)
    this.router.navigate(['tictactoe', String(form.value.userOne), String(form.value.symbolOne), String(form.value.userTwo), String(form.value.symbolTwo)]);
  }

}
