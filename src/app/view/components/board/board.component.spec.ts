import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { CommonModule } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        CdkDropListGroup,
        CdkDropList,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add task', () => {
    const task = 'New Task';
    component.addTask(task);
    expect(component.board.columns[0].tasks).toContain(task);
  });

  it('should remove task', () => {
    const columnIndex = 0;
    const index = 0;
    component.removeTask({ columnIndex, index });
    expect(component.board.columns[columnIndex].tasks.length).toBe(1);
  });

  xit('should move task', () => {
    const previousIndex = 0;
    const currentIndex = 1;
    const previousContainer = component.board.columns[0].tasks;
    const container = component.board.columns[1].tasks;
    const item = previousContainer[previousIndex];
    component.drop({
      previousContainer,
      container,
      previousIndex,
      currentIndex,
      item,
    } as unknown as CdkDragDrop<string[]>);
    console.log(previousContainer.indexOf(item));
    expect(previousContainer.indexOf(item)).toBe(1);
    expect(container.indexOf(item)).toBe(currentIndex);
  });
});
