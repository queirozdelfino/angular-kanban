import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MyErrorStateMatcher } from '../../../utils/formUtils';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'TaskInput',
  standalone: true,
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    IconComponent,
  ],
})
export class TaskInputComponent {
  task = new FormControl('', [Validators.required]);

  @Output() sendTask = new EventEmitter();

  addTask() {
    if (this.task.valid) {
      this.sendTask.emit(this.task.value);
      this.task.setErrors(null);
      this.task.reset();
    }
  }

  matcher = new MyErrorStateMatcher();
}
