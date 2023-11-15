import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';
import { Column } from '../../../models/column.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

class dialogMock {
  open() {
    return {
      afterClosed: () => of({}),
    };
  }
}

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, ConfirmDialogComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: new dialogMock(),
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.column = new Column('Test Column', ['Test Task']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit task', () => {
    const task = 'New Task';
    spyOn(component.sendTaskInsert, 'emit');
    component.recieveTask(task);
    expect(component.sendTaskInsert.emit).toHaveBeenCalledWith(task);
  });

  xit('should open dialog', () => {
    spyOn(component.dialog, 'open').and.callThrough();
    component.deleteTask(0, 'Test Task');
    expect(component.dialog.open).toHaveBeenCalledWith(ConfirmDialogComponent, {
      disableClose: false,
    });
  });

  xit('should delete task', () => {
    spyOn(component.sendTaskDelete, 'emit');
    component.deleteTask(0, 'Test Task');
    component.dialogRef?.close(true);
    expect(component.sendTaskDelete.emit).toHaveBeenCalledWith({
      columnIndex: 0,
      index: 0,
    });
  });
});
