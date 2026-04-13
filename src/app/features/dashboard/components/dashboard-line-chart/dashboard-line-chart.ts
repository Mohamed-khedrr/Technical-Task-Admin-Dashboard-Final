import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import * as echarts from 'echarts';
import { AnalyticsService } from '../../../../core/services/analytics-service';

@Component({
  selector: 'app-dashboard-line-chart',
  standalone: false,
  templateUrl: './dashboard-line-chart.html',
  styleUrl: './dashboard-line-chart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLineChart {
  analyticsService = inject(AnalyticsService);

  selectOptions = [
    { name: 'sales', value: 'sales' },
    { name: 'expenses', value: 'expenses' },
  ];

  stateOptions = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
  ];

  selectedType = signal('sales');
  selectedState = signal('day');

  isLoading = computed(() => this.analyticsService.lineChartLoading());

  chartOptions = computed<echarts.EChartsOption>(() => {
    const data = this.analyticsService.lineChartData();
    return {
      grid: { left: 50, right: 0, top: 0, bottom: 0 },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        padding: 0,
        axisPointer: {
          type: 'line',
          animation: true,
          lineStyle: { color: '#0561FC' },
        },
        formatter: (params: any) =>
          `<span style="background-color: #637EB4; color: white; padding: 5px; border-radius: 8px">$${params[0].data.toLocaleString('de-DE')}</span>`,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data?.labels ?? [],
        splitLine: { show: true, lineStyle: { color: '#F1F3F4' } },
        axisLine: { show: true, lineStyle: { color: '#E5E5E5' } },
        axisLabel: { margin: 20, color: '#575C5F', fontFamily: 'Inter', fontSize: 11 },
      },
      yAxis: {
        type: 'value',
        splitLine: { show: true, lineStyle: { color: '#F1F3F4' } },
        axisLine: { show: true, lineStyle: { color: '#F1F3F4' } },
        axisLabel: {
          color: '#ADB1B2',
          fontFamily: 'Inter',
          fontSize: 12,
          fontWeight: 700,
          formatter: (value: number) => {
            return new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            }).format(value);
          },
        },
      },
      series: [
        {
          data: data?.values ?? [],
          type: 'line',
          showSymbol: false,
          symbolSize: 17,
          emphasis: {
            scale: 1,
            focus: 'series',
            lineStyle: { opacity: 0.7 },
            itemStyle: { borderWidth: 5, color: 'white', borderColor: '#0561FC' },
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#0561FC1f' },
              { offset: 1, color: '#0561FC00' },
            ]),
          },
        },
      ],
    };
  });

  constructor() {
    effect(() => {
      this.analyticsService.loadLineChartData(this.selectedType(), this.selectedState());
    });
  }
}
