import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { IconComponent } from '../icon/icon.component';
import { TaskInputComponent } from '../task-input/task-input.component';
import { Column } from '../../../models/column.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'Tasks',
  standalone: true,
  imports: [CommonModule, CdkDrag, IconComponent, TaskInputComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() column: Column = new Column('', []);
  @Input() columnIndex: number = 0;
  @Output() sendTaskInsert = new EventEmitter();
  @Output() sendTaskDelete = new EventEmitter();
  dialogRef: MatDialogRef<ConfirmDialogComponent> | undefined;

  constructor(public dialog: MatDialog) {}

  recieveTask(event: string) {
    this.sendTaskInsert.emit(event);
  }

  deleteTask(index: number, item: string) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false,
    });
    this.dialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete? Task: ' + item;

    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.sendTaskDelete.emit({ columnIndex: this.columnIndex, index });
      }
    });
  }
}
