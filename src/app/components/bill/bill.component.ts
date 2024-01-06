import { Component } from '@angular/core';
import { Board } from 'src/app/interfaces/board';
import { Game } from 'src/app/interfaces/game';
import { BoardService } from 'src/app/services/board.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styles: [],
})
export class BillComponent {
  games: Game[] = [];
  boards: Board[] = [];
  constructor(
    private gameService: GameService,
    private boardService: BoardService
  ) {}
  ngOnInit() {
    this.gameService.games$.subscribe((games) => (this.games = games));
    this.boardService.boards$.subscribe((boards) => (this.boards = boards));
  }

  calculateTotalAmount(
    boardName: string,
    startTime: string,
    endTime: string
  ): number {
    const board = this.boards.find((board) => board.name === boardName);
    const startTimeObj = new Date(`2000-01-01T${startTime}`).getTime();
    const endTimeObj = new Date(`2000-01-01T${endTime}`).getTime();

    const timeDifferenceInMs = endTimeObj - startTimeObj;
    const totalMinutes = Math.floor(timeDifferenceInMs / (1000 * 60));
    const timeDifferenceInSeconds = Math.floor(timeDifferenceInMs / 1000);
    if (board) {
      return Math.round((board.price / 3600) * timeDifferenceInSeconds);
    }
    return 0;
  }

  countLostPlayers(players: any[]): number {
    return players.filter((player) => player.lost).length;
  }

  calculate() {
    let sum = 0;
    this.games.forEach((game) => {
      game.players?.forEach((player) => {
        if (
          player.name.toLowerCase() === 'Seshu'.toLowerCase() &&
          player.lost === true &&
          player.payment === 'PENDING'
        ) {
          sum +=
            this.calculateTotalAmount(
              game.board,
              game.startTime,
              game.endTime!
            ) / this.countLostPlayers(game.players!);
          console.log(sum);
        }
      });
    });
    console.log(`Total: ${sum}`);
  }
}
