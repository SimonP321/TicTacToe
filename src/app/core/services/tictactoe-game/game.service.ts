import { Injectable } from '@angular/core';
import { State } from 'src/app/shared/models/enums/ESquare';
import { TictactoeSquare } from 'src/app/shared/models/tictactoe/tictactoe-board-square';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  checkIfFieldIsFull(squares: TictactoeSquare[][]): boolean {
    for(let index of squares) {
      for(let square of index) {
        if (square.state == State.EMPTY) {
          return false;
        }
      }
    }

    return true;
  }

  checkIfSomeoneWins(squares: TictactoeSquare[][]): State {
    let row = this.checkVerticalAndHorizontalWin(squares);
    if (row != State.EMPTY)
      return row;

    let diagonal = this.checkDiagonalWin(squares);
    if (diagonal != State.EMPTY)
      return diagonal;

    return State.EMPTY;
  }

  resetGame(squares: TictactoeSquare[][]) {
    for(let index of squares) {
      for(let square of index) {
        if (square.state != State.EMPTY) {
          square.state = State.EMPTY;
        }
      }
    }
  }

  private checkDiagonalWin(squares: TictactoeSquare[][]): State {
    let squareRoot = squares.length;
    let firstSquare = squares[0][0];
    let firstSquareOnBottom = squares[squareRoot - 1][0];

    // check diagonal from top to bottom
    for(let square = 1; square < squareRoot; square++) {
      if (firstSquare.state != State.EMPTY && firstSquare.state == squares[square][square].state) {
        if (square == squareRoot - 1) {
          return firstSquare.state;
        } else {
          continue;
        }
      } else {
        break;
      }
    }

    // check diagonal from bottom to top
    for(let square = 1; square < squareRoot; square++) {
      if (firstSquareOnBottom.state != State.EMPTY && firstSquareOnBottom.state == squares[(squareRoot - 1) - (square)][square].state) {
        if (square == squareRoot - 1) {
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

  private checkVerticalAndHorizontalWin(squares: TictactoeSquare[][]): State {
    let squareRoot = squares.length;

    for(let i = 0; i < squareRoot; i++) {
      let firstRow = squares[i][0];
      let firstColumn = squares[0][i];

      // check horizontal
      for(let square = 1; square < squareRoot; square++) {
        if (firstRow.state != State.EMPTY && firstRow.state == squares[i][square].state) {
          if (square == squareRoot - 1) {
            return firstRow.state;
          } else {
            continue;
          }
        } else {
          break;
        }
      }

      // check vertical
      for(let square = 1; square < squareRoot; square++) {
        if (firstColumn.state != State.EMPTY && firstColumn.state == squares[square][i].state) {
          if (square == squareRoot - 1) {
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
