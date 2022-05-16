import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/core/services/tictactoe-game/game.service';
import { State } from 'src/app/shared/models/enums/ESquare';
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

  userOne: string = "";
  symbolOne: string = "";
  userTwo: string = "";
  symbolTwo: string = "";
  stateRef: typeof State = State;

  @Output() public onChangePlayerTurnChildEvent = new EventEmitter();

  constructor(private game: GameService, private activatedRoute: ActivatedRoute) {

    }

  ngOnInit(): void {
    this.userOne = this.activatedRoute.snapshot.paramMap.get('userOne') as string;
    this.symbolOne = this.activatedRoute.snapshot.paramMap.get('symbolOne') as string;
    this.userTwo = this.activatedRoute.snapshot.paramMap.get('userTwo') as string;
    this.symbolTwo = this.activatedRoute.snapshot.paramMap.get('symbolTwo') as string;

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
          message += this.userOne
        } else {
          message += this.userTwo
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
