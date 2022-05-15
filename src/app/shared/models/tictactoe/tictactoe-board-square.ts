import { State } from 'src/app/shared/models/enums/ESquare';

export class TictactoeSquare {

  state: State = State.EMPTY;
  row: number = 0;
  column: number = 0;
  name: string | undefined;
  symbol: string | undefined;

  constructor() {
  }

}
