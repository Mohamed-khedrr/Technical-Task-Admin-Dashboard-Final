export interface IAnalyticCard {
  label: string;
  value: number;
  valueFormat: 'currency' | 'number';
  change: string;
  changePositive: boolean;
  iconSrc: string;
  iconAlt: string;
}
