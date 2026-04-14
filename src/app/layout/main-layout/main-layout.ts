import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SidebarStore } from '../../core/stores/sidebar-store';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {
  sideStore = inject(SidebarStore)
}
