import { IUser } from 'src/app/shared/models/interfaces/IUser';
import { State } from 'src/app/shared/models/enums/ESquare';

export class TictactoeBoardSquareComponent implements IUser {

  state: State = State.EMPTY;
  row: number = 0;
  column: number = 0;
  name: string | undefined;
  symbol: string | undefined;

  stateRef: typeof State = State;

  constructor() {
  }

}
