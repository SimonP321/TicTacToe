import { TestBed } from '@angular/core/testing';

import { TictactoeBoardResolver } from './tictactoe-board.resolver';

describe('TictactoeBoardResolver', () => {
  let resolver: TictactoeBoardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TictactoeBoardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
