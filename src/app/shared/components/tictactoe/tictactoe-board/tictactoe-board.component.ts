import { Component, OnInit } from '@angular/core';
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
  private turn: boolean = false;
  readonly squares: TictactoeSquare[][] = [];

  userOne: string = "";
  symbolOne: string = "";
  userTwo: string = "";
  symbolTwo: string = "";

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

      if (this.turn) {
        squareClass.state = State.USERONE;
        this.turn = false;
      } else {
        squareClass.state = State.USERTWO;
        this.turn = true;
      }

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
      }

      let checkFull = this.game.checkIfFieldIsFull(this.squares);
      if (checkFull) {
        alert("Unendschieden");
        this.game.resetGame(this.squares);
      }
  }

}
