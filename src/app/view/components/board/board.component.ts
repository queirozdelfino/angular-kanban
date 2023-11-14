import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskComponent } from '../task/task.component';
import { Board } from '../../../models/board.model';
import { Column } from '../../../models/column.model';

@Component({
  selector: 'Board',
  standalone: true,
  imports: [
    CommonModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    TaskComponent,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  board: Board = new Board('Test Board', [
    new Column('To Do', ['Some Random', 'Test', 'Test']),
    new Column('Implementing', ['Some Random 2', 'Test2']),
    new Column('Done', ['Test3']),
  ]);

  addTask(event: string) {
    this.board.columns[0].tasks.push(event);
  }

  removeTask(event: any) {
    this.board.columns[event.columnIndex].tasks.splice(event.index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
