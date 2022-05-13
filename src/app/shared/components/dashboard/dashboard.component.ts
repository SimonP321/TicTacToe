import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pass: string = "asdasds";

  constructor(private cookies: CookieService, private router: Router, private activatedRoute: ActivatedRoute) {
    /* this.pass = cookies.get("password"); */ // TODO checkpassword (evtl. mit guards)
  }

  ngOnInit(): void {
    
  }

  onPlay() {
    this.router.navigate(['tictactoe']);
  }

}
