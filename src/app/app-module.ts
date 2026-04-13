import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';

import { MainLayout } from './layout/main-layout/main-layout';
import { MainSidebar } from './layout/main-sidebar/main-sidebar';
import { MainTopbar } from './layout/main-topbar/main-topbar';
import { RouterOutlet } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { AppTheme } from './core/primeng-theme';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

import {
  LucideHouse,
  LucideShoppingCart,
  LucideUsers,
  LucideStore,
  LucideReceiptText,
  LucideFileChartColumn,
  LucideMessageCircleMore,
  LucideSettings,
  LucideLifeBuoy,
  LucideChevronRight,
  LucideSearch,
  LucideShoppingBasket,
  LucideBell,
  LucideChevronDown,
  LucideMenu,
} from '@lucide/angular';
import { NgOptimizedImage } from '@angular/common';
import { MainSidebarLink } from './layout/main-sidebar-link/main-sidebar-link';
import { PopoverModule } from 'primeng/popover';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    LucideHouse,
    LucideShoppingCart,
    LucideUsers,
    LucideStore,
    LucideReceiptText,
    LucideFileChartColumn,
    LucideMessageCircleMore,
    LucideSettings,
    LucideLifeBuoy,
    LucideChevronRight,
    LucideSearch,
    LucideShoppingBasket,
    LucideBell,
    LucideChevronDown,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    NgOptimizedImage,
    LucideMenu,
    PopoverModule,
    ProgressSpinnerModule,
  ],
  declarations: [MainTopbar, MainSidebar, MainLayout, MainSidebarLink, App],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: AppTheme,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
  bootstrap: [App],
})
export class AppModule {}
