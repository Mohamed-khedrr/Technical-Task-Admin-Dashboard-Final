import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-main-sidebar-link',
  standalone: false,
  templateUrl: './main-sidebar-link.html',
  styleUrl: './main-sidebar-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSidebarLink {
  label = input.required<string>();
  href = input<string>('#');
  showDot = input<boolean>(false);
}
