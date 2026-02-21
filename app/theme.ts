import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

/**
 * toolsHub.builders - Crisp Utility Design System
 *
 * Color Palette: Electric Blue + Warm Grays
 * Typography: Plus Jakarta Sans (headings) + DM Sans (body)
 */

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Brand Colors - Electric Blue System
        brand: {
          50: { value: "#E8F4FD" },
          100: { value: "#D1E9FA" },
          200: { value: "#A6D4F5" },
          300: { value: "#77BFF0" },
          400: { value: "#4AA9EB" },
          500: { value: "#1E92E6" }, // Primary
          600: { value: "#157BD3" },
          700: { value: "#0F64B0" },
          800: { value: "#094D8C" },
          900: { value: "#033668" },
        },
        // Neutral System - Warm Grays
        gray: {
          50: { value: "#FAFAF9" },
          100: { value: "#F5F5F4" },
          150: { value: "#E7E5E4" },
          200: { value: "#D6D3D1" },
          300: { value: "#A8A29E" },
          400: { value: "#78716C" },
          500: { value: "#57534E" },
          600: { value: "#44403C" },
          700: { value: "#292524" },
          800: { value: "#1C1917" },
          900: { value: "#0C0A09" },
        },
        // Semantic Colors
        success: {
          50: { value: "#D1FAE5" },
          500: { value: "#10B981" },
          600: { value: "#059669" },
        },
        warning: {
          50: { value: "#FEF3C7" },
          500: { value: "#F59E0B" },
          600: { value: "#D97706" },
        },
        error: {
          50: { value: "#FEE2E2" },
          500: { value: "#EF4444" },
          600: { value: "#DC2626" },
        },
        info: {
          50: { value: "#DBEAFE" },
          500: { value: "#3B82F6" },
          600: { value: "#2563EB" },
        },
      },
      fonts: {
        heading: { value: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
        body: { value: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
      },
      fontSizes: {
        xs: { value: "0.640rem" },     // 10.24px
        sm: { value: "0.800rem" },     // 12.80px
        md: { value: "1.000rem" },     // 16px
        lg: { value: "1.250rem" },     // 20px
        xl: { value: "1.563rem" },     // 25px
        "2xl": { value: "2.441rem" },  // 39px
        "3xl": { value: "3.052rem" },  // 48.8px
        "4xl": { value: "3.815rem" },  // 61px
        "5xl": { value: "4.769rem" },  // 76.3px
        "6xl": { value: "5.961rem" },  // 95.4px
      },
      spacing: {
        0: { value: "0" },
        0.5: { value: "0.125rem" },   // 2px
        1: { value: "0.25rem" },      // 4px
        1.5: { value: "0.375rem" },   // 6px
        2: { value: "0.5rem" },       // 8px
        2.5: { value: "0.625rem" },   // 10px
        3: { value: "0.75rem" },      // 12px
        3.5: { value: "0.875rem" },   // 14px
        4: { value: "1rem" },         // 16px
        5: { value: "1.25rem" },      // 20px
        6: { value: "1.5rem" },       // 24px
        7: { value: "1.75rem" },      // 28px
        8: { value: "2rem" },         // 32px
        9: { value: "2.25rem" },      // 36px
        10: { value: "2.5rem" },      // 40px
        12: { value: "3rem" },        // 48px
        14: { value: "3.5rem" },      // 56px
        16: { value: "4rem" },        // 64px
        20: { value: "5rem" },        // 80px
        24: { value: "6rem" },        // 96px
        32: { value: "8rem" },        // 128px
        40: { value: "10rem" },       // 160px
        48: { value: "12rem" },       // 192px
      },
      radii: {
        sm: { value: "4px" },
        md: { value: "8px" },
        lg: { value: "12px" },
        xl: { value: "16px" },
        "2xl": { value: "24px" },
        full: { value: "9999px" },
      },
      shadows: {
        sm: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
        md: { value: "0 4px 6px -1px rgb(0 0 0 / 0.07)" },
        lg: { value: "0 8px 15px -3px rgb(0 0 0 / 0.08)" },
        xl: { value: "0 12px 24px -4px rgb(0 0 0 / 0.1)" },
        "brand-sm": { value: "0 1px 3px 0 rgb(30 146 230 / 0.15)" },
        "brand-md": { value: "0 4px 12px 0 rgb(30 146 230 / 0.2)" },
        "brand-lg": { value: "0 8px 30px 0 rgb(30 146 230 / 0.25)" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          surface: { value: "{colors.gray.50}" },
          subdued: { value: "{colors.gray.100}" },
        },
        fg: {
          subtle: { value: "{colors.gray.400}" },
          muted: { value: "{colors.gray.500}" },
        },
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.50}" },
          emphasized: { value: "{colors.brand.600}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
