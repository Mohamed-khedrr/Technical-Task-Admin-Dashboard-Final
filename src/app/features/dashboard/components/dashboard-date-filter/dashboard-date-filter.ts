import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { DateRange, IDateFilter } from '../../models/order-interfaces';

interface DateRangeOption {
  label: string;
  value: DateRange;
}

@Component({
  selector: 'app-dashboard-date-filter',
  standalone: false,
  templateUrl: './dashboard-date-filter.html',
  styleUrl: './dashboard-date-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDateFilter {
  filterChange = output<IDateFilter>();

  readonly rangeOptions: DateRangeOption[] = [
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'This Week', value: 'this-week' },
    { label: 'Last Week', value: 'last-week' },
    { label: 'This Month', value: 'this-month' },
    { label: 'Last Month', value: 'last-month' },
    { label: 'Custom', value: 'custom' },
  ];

  readonly selectedRange = signal<DateRange>('this-month');
  readonly customStart = signal<Date | null>(null);
  readonly customEnd = signal<Date | null>(null);

  readonly isCustom = computed(() => this.selectedRange() === 'custom');

  onRangeChange(value: DateRange): void {
    this.selectedRange.set(value);
    if (value !== 'custom') {
      this.emitFilter();
    }
  }

  onCustomStartChange(value: Date | null): void {
    this.customStart.set(value);
    this.emitFilter();
  }

  onCustomEndChange(value: Date | null): void {
    this.customEnd.set(value);
    this.emitFilter();
  }

  private emitFilter(): void {
    const range = this.selectedRange();
    const filter: IDateFilter = { range };
    if (range === 'custom') {
      const start = this.customStart();
      const end = this.customEnd();
      if (start) filter.customStart = start;
      if (end) filter.customEnd = end;
    }
    this.filterChange.emit(filter);
  }
}
