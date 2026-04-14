import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  standalone: false,
  templateUrl: './main-sidebar.html',
  styleUrl: './main-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSidebar {}
