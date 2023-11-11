import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BoardComponent } from '../../components/board/board.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CommonModule, NavbarComponent, BoardComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {}
