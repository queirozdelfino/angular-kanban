import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { IconComponent } from '../icon/icon.component';
import { TaskInputComponent } from '../task-input/task-input.component';
import { Column } from '../../../models/column.model';

@Component({
  selector: 'Tasks',
  standalone: true,
  imports: [CommonModule, CdkDrag, IconComponent, TaskInputComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() column: Column = new Column('', []);
}
