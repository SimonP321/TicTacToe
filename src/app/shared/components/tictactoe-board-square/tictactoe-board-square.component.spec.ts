import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeBoardSquareComponent } from './tictactoe-board-square.component';

describe('TictactoeBoardSquareComponent', () => {
  let component: TictactoeBoardSquareComponent;
  let fixture: ComponentFixture<TictactoeBoardSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TictactoeBoardSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TictactoeBoardSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
