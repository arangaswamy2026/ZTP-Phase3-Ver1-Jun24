import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/ZTP-phase-3-/',
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
      // Figma Make exports versioned import specifiers — remap to installed packages
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
      '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
      '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
      '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
      '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
      '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
      '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
      '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
      '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
      '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
      'class-variance-authority@0.7.1': 'class-variance-authority',
      'cmdk@1.1.1': 'cmdk',
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'input-otp@1.4.2': 'input-otp',
      'lucide-react@0.487.0': 'lucide-react',
      'next-themes@0.4.6': 'next-themes',
      'react-day-picker@8.10.1': 'react-day-picker',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'recharts@2.15.2': 'recharts',
      'sonner@2.0.3': 'sonner',
      'vaul@1.1.2': 'vaul',
    },
  },
})
