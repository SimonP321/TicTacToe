import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from 'src/app/shared/models/enums/ESquare';
import { TictactoeBoardSquareComponent } from '../../../models/tictactoe/tictactoe-board-square';

@Component({
  selector: 'app-tictactoe-board',
  templateUrl: './tictactoe-board.component.html',
  styleUrls: ['./tictactoe-board.component.scss']
})
export class TictactoeBoardComponent implements OnInit {

  squareNumber: number = 9;
  squareRoot: number = Math.floor(Math.sqrt(this.squareNumber));

  /* readonly squares: number[][] | undefined; */
  readonly squares: TictactoeBoardSquareComponent[][] = [];
/*   readonly squares: Array<Array<TictactoeBoardSquareComponent>> = Array<Array<TictactoeBoardSquareComponent>>(3); */

  private turn: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
     // fills the array squareRoot times with 0, to iterate through and create a board; only for initialization
     /* this.squares = Array(this.squareRoot).fill(-1).map(() => new Array(this.squareRoot).fill(State.EMPTY)); */
      for(let r = 0; r < this.squareRoot; r++) {
        this.squares[r] = [];
        for(let c = 0; c < this.squareRoot; c++) {
          let square = new TictactoeBoardSquareComponent();
          square.row = r;
          square.column = c;
          this.squares[r][c] = square;
        }
      }


    }

  ngOnInit(): void {
/*     this.name = this.activatedRoute.snapshot.paramMap.get('name') as string;
    this.symbol = this.activatedRoute.snapshot.paramMap.get('symbol') as string; */
  }

  onChangePlayerTurn(squareClass: TictactoeBoardSquareComponent) {
    if (squareClass.state != State.EMPTY)
      return;

      if (this.turn) {
        squareClass.state = State.USERONE;
        this.turn = false;
      } else {
        squareClass.state = State.USERTWO;
        this.turn = true;
      }

      let checkWinner = this.checkIfSomeoneWins();
      if (checkWinner != State.EMPTY) {
        // winner
        let s = 0;
      }

      let checkFull = this.checkIfFieldIsFull();
      if (checkFull) {
        // unendschieden
        let s = 0;
      }
  }

  checkIfFieldIsFull(): boolean {
    for(let index of this.squares) {
      for(let square of index) {
        if (square.state == State.EMPTY) {
          return false;
        }
      }
    }

    return true;
  }

  checkIfSomeoneWins(): State {
    let row = this.checkVerticalAndHorizontalWin();
    if (row != State.EMPTY)
      return row;

    let diagonal = this.checkDiagonalWin();
/*     if (diagonal != State.EMPTY)
      return diagonal; */

    return State.EMPTY;
  }

  private checkDiagonalWin(): State {
    let firstSquare = this.squares[0][0];
    let firstSquareOnBottom = this.squares[this.squareRoot - 1][0];

    // check diagonal from top to bottom
    for(let square = 1; square < this.squareRoot; square++) {
      if (firstSquare.state != State.EMPTY && firstSquare.state == this.squares[square][square].state) {
        if (square == this.squareRoot - 1) {
          return firstSquare.state;
        } else {
          continue;
        }
      } else {
        break;
      }
    }

    // check diagonal from bottom to top
    for(let square = 1; square < this.squareRoot; square++) {
      if (firstSquareOnBottom.state != State.EMPTY && firstSquareOnBottom.state == this.squares[(this.squareRoot - 1) - (square)][square].state) {
        if (square == this.squareRoot - 1) {
          return firstSquareOnBottom.state;
        } else {
          continue;
        }
      } else {
        break;
      }
    }

    return State.EMPTY;
  }

  private checkVerticalAndHorizontalWin(): State {
    for(let i = 0; i < this.squareRoot; i++) {
      let firstRow = this.squares[i][0];
      let firstColumn = this.squares[0][i];

      // check horizontal
      for(let square = 1; square < this.squareRoot; square++) {
                if (firstRow.state != State.EMPTY && firstRow.state == this.squares[i][square].state) {
          if (square == this.squareRoot - 1) {
            return firstRow.state;
          } else {
            continue;
          }
        } else {
          break;
        }
      }

      // check vertical
      for(let square = 1; square < this.squareRoot; square++) {
        if (firstColumn.state != State.EMPTY && firstColumn.state == this.squares[square][i].state) {
          if (square == this.squareRoot - 1) {
            return firstColumn.state;
          } else {
            continue;
          }
        } else {
          break;
        }
      }
    }

    return State.EMPTY;
  }

}
