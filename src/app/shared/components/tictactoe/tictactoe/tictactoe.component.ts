import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/shared/models/enums/ESquare';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {

  playerTurn: State = State.USERONE; // maybe zu undefined machen
  stateRef: typeof State = State;

  constructor() { }

  ngOnInit(): void {
  }

  onChangePlayerTurn(event: number) {
    this.playerTurn = event;
  }

}
