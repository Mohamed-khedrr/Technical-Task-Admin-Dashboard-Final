import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const AppTheme = definePreset(Aura, {
  semantic: {
    // ── Primary palette ──────────────────────────────────────────────────────
    // Built around the brand primary #0561fc (shade 500).
    // PrimeNG uses this ramp for hover/focus/active state generation.
    primary: {
      50:  '#eef4ff',
      100: '#dae7ff',
      200: '#b8d0ff',
      300: '#7aadff',
      400: '#3c85ff',
      500: '#0561fc',
      600: '#0450d4',
      700: '#0340aa',
      800: '#02307f',
      900: '#012260',
      950: '#011540',
    },

    colorScheme: {
      light: {
        // ── Semantic primary color slots ────────────────────────────────────
        primary: {
          color:        '{primary.500}',
          inverseColor: '#ffffff',
          hoverColor:   '{primary.600}',
          activeColor:  '{primary.700}',
        },

        // ── Surface scale ───────────────────────────────────────────────────
        // Used by inputs, cards, panels, overlays, dropdowns.
        surface: {
          0:   '#ffffff',   // $color-bg-white
          50:  '#f8fafb',   // $color-bg-page
          100: '#f7f9fa',   // $color-bg-table-header
          200: '#e7edf0',   // $color-bg-surface-icon
          300: '#d2dce1',   // $color-border-light
          400: '#e5e5e5',   // $color-border-separator
          500: '#93a3ab',   // $color-text-muted
          600: '#aeb9be',   // $color-text-muted-alt
          700: '#474747',   // $color-text-medium
          800: '#3c3c3c',   // $color-text-dark
          900: '#3c3c3c',   // $color-text-dark
          950: '#000000',   // $color-text-primary
        },

        // ── Highlight (selected rows, active list items) ────────────────────
        highlight: {
          background:      '{primary.100}',
          focusBackground: '{primary.200}',
          color:           '{primary.700}',
          focusColor:      '{primary.800}',
        },

        // ── Form fields ─────────────────────────────────────────────────────
        formField: {
          hoverBorderColor: '{primary.color}',
        },
      },
    },
  },
});
