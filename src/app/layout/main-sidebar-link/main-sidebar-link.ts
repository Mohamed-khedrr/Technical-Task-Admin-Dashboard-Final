import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { SidebarStore } from '../../core/stores/sidebar-store';

@Component({
  selector: 'app-main-sidebar-link',
  standalone: false,
  templateUrl: './main-sidebar-link.html',
  styleUrl: './main-sidebar-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSidebarLink {
  sideStore = inject(SidebarStore);

  label = input.required<string>();
  href = input<string>('#');
  showDot = input<boolean>(false);
}
