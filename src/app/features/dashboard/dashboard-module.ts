import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { DashboardAnalyticCard } from './components/dashboard-analytic-card/dashboard-analytic-card';
import { DashboardLineChart } from './components/dashboard-line-chart/dashboard-line-chart';
import { DashboardBarChart } from './components/dashboard-bar-chart/dashboard-bar-chart';
import { DashboardRecentOrders } from './components/dashboard-recent-orders/dashboard-recent-orders';
import { DashboardDateFilter } from './components/dashboard-date-filter/dashboard-date-filter';
import { LucideArrowRight } from '@lucide/angular';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DatePickerModule } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const routes: Routes = [{ path: '', component: DashboardPage }];

@NgModule({
  declarations: [
    DashboardPage,
    DashboardAnalyticCard,
    DashboardLineChart,
    DashboardBarChart,
    DashboardRecentOrders,
    DashboardDateFilter,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxEchartsModule.forRoot({ echarts }),
    SelectModule,
    SelectButtonModule,
    DatePickerModule,
    TableModule,
    FormsModule,
    ProgressSpinnerModule,
    LucideArrowRight,
  ],
})
export class DashboardModule {}
