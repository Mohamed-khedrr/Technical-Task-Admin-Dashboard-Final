import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-analytic-card',
  standalone: false,
  templateUrl: './dashboard-analytic-card.html',
  styleUrl: './dashboard-analytic-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAnalyticCard {
  label = input<string>('');
  value = input<number>(0);
  valueFormat = input<'currency' | 'number'>('number');
  change = input<string>('');
  changePositive = input<boolean>(true);
  iconSrc = input<string>('');
  iconAlt = input<string>('');
}
