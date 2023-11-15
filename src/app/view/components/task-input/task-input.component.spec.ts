import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskInputComponent } from './task-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IconComponent } from '../icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TaskInputComponent', () => {
  let component: TaskInputComponent;
  let fixture: ComponentFixture<TaskInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit task', () => {
    const task = 'New Task';
    spyOn(component.sendTask, 'emit');
    component.task.setValue(task);
    component.addTask();
    expect(component.sendTask.emit).toHaveBeenCalledWith(task);
  });

  it('should not emit task', () => {
    spyOn(component.sendTask, 'emit');
    component.task.setValue('');
    component.addTask();
    expect(component.sendTask.emit).not.toHaveBeenCalled();
  });

  it('should not emit task with only spaces', () => {
    spyOn(component.sendTask, 'emit');
    component.task.setValue('   ');
    component.addTask();
    expect(component.sendTask.emit).not.toHaveBeenCalled();
  });

  it('should not emit task with more than 40 characters', () => {
    spyOn(component.sendTask, 'emit');
    component.task.setValue(
      'This is a task with more than 40 characters. It should not be added.'
    );
    component.addTask();
    expect(component.sendTask.emit).not.toHaveBeenCalled();
  });
});
