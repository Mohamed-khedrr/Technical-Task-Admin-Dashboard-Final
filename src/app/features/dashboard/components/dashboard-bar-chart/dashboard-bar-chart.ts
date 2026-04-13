import { Component, computed, effect, inject, signal } from '@angular/core';
import * as echarts from 'echarts';
import { AnalyticsService } from '../../../../core/services/analytics-service';

@Component({
  selector: 'app-dashboard-bar-chart',
  standalone: false,
  templateUrl: './dashboard-bar-chart.html',
  styleUrl: './dashboard-bar-chart.scss',
})
export class DashboardBarChart {
  analyticsService = inject(AnalyticsService);
  isLoading = computed(() => this.analyticsService.barChartLoading());

  stateOptions = [
    { label: 'D', value: 'day' },
    { label: 'W', value: 'week' },
    { label: 'M', value: 'month' },
    { label: 'Y', value: 'year' },
  ];

  selectedState = signal('day');

  constructor() {
    effect(() => {
      this.analyticsService.loadBarChartData(this.selectedState());
    });
  }

  chartOptions = computed<echarts.EChartsOption>(() => {
    const data = this.analyticsService.barChartData();
    return {
      grid: {
        left: 0,
        right: 0,
        top: 8,
        bottom: 0,
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        padding: 0,
        axisPointer: {
          type: 'none',
        },
        formatter: function (params: any) {
          return `<span style="background-color: #637EB4; color: white; padding: 5px; border-radius: 8px">${'$' + params[0].data.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`;
        },
      },
      xAxis: {
        type: 'category',
        data: data?.labels ?? [],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#ADB1B2',
          fontFamily: 'Inter',
          fontSize: 12,
          fontWeight: 700,
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          data: data?.values ?? [],
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            color: '#0561FC',
            borderRadius: [6],
          },
          emphasis: {
            itemStyle: {
              color: '#0561FC9f',
            },
          },
        },
      ],
    };
  });
}
