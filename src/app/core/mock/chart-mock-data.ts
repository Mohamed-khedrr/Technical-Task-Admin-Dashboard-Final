// src/app/core/mock/chart-mock-data.ts
import { IChartData } from '../models/chart-data-interface';

export const CHART_MOCK_DATA: Record<string, IChartData> = {
  'sales-day': {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [8200, 9100, 7800, 10500, 12300, 14100, 11800],
  },
  'sales-week': {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
    values: [52000, 61000, 48000, 70000, 83000, 75000, 91000, 68000],
  },
  'sales-month': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [210000, 195000, 230000, 265000, 310000, 340000, 385000, 360000, 295000, 320000, 410000, 450000],
  },
  'sales-year': {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    values: [1800000, 2200000, 2750000, 3100000, 3800000],
  },
  'expenses-day': {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [5100, 6200, 4900, 7100, 8400, 9200, 7600],
  },
  'expenses-week': {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
    values: [34000, 40000, 31000, 46000, 55000, 49000, 61000, 44000],
  },
  'expenses-month': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [140000, 130000, 155000, 175000, 205000, 225000, 255000, 240000, 195000, 215000, 275000, 300000],
  },
  'expenses-year': {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    values: [1200000, 1500000, 1850000, 2100000, 2550000],
  },
};
