import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { GameService } from 'src/app/core/services/tictactoe-game/game.service';
import { State } from 'src/app/shared/models/enums/ESquare';
import { IUser } from 'src/app/shared/models/interfaces/IUser';
import { TictactoeSquare } from '../../../models/tictactoe/tictactoe-board-square';

@Component({
  selector: 'app-tictactoe-board',
  templateUrl: './tictactoe-board.component.html',
  styleUrls: ['./tictactoe-board.component.scss']
})
export class TictactoeBoardComponent implements OnInit {

  squareNumber: number = 9;
  squareRoot: number = Math.floor(Math.sqrt(this.squareNumber));
  playerOneTurn: boolean = true;
  readonly squares: TictactoeSquare[][] = [];

  public userData: IUser[] = [];

  stateRef: typeof State = State;

  @Output() public onChangePlayerTurnChildEvent = new EventEmitter();

  constructor(private game: GameService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => this.userData = (data[0] as IUser[]));

    for(let r = 0; r < this.squareRoot; r++) {
      this.squares[r] = [];
      for(let c = 0; c < this.squareRoot; c++) {
        let square = new TictactoeSquare();
        square.row = r;
        square.column = c;
        this.squares[r][c] = square;
      }
    }
  }

  onChangePlayerTurn(squareClass: TictactoeSquare) {
    if (squareClass.state != State.EMPTY)
      return;

      let nextTurn;

      // changes the player turn
      if (this.playerOneTurn) {
        squareClass.state = State.USERONE;
        nextTurn = State.USERTWO;
        this.playerOneTurn = false;
      } else {
        squareClass.state = State.USERTWO;
        this.playerOneTurn = true;
        nextTurn = State.USERONE;
      }

      // checks if someone won
      let checkWinner = this.game.checkIfSomeoneWins(this.squares);
      if (checkWinner != State.EMPTY) {
        let message = "Spieler ";
        
        if (checkWinner == State.USERONE) {
          message += this.userData[0].user;
        } else {
          message += this.userData[1].user;
        }

        message += " hat das Spiel gewonnen";
        alert(message);
        this.game.resetGame(this.squares);

        nextTurn = State.USERONE;
        this.playerOneTurn = true;
      }

      // checks if tictactoe board is full
      let checkFull = this.game.checkIfFieldIsFull(this.squares);
      if (checkFull) {
        alert("Unendschieden");
        this.game.resetGame(this.squares);

        nextTurn = State.USERONE;
        this.playerOneTurn = true;
      }

      // sends the current player turn to parent, to display the name
      this.onChangePlayerTurnChildEvent.emit(nextTurn);
  }

}
