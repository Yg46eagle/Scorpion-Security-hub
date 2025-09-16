module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Security Blue
        primary: {
          DEFAULT: "#1E3A5F", // deep-security-blue
          50: "#F0F4F8", // deep-security-blue-50
          100: "#D9E2EC", // deep-security-blue-100
          200: "#BCCCDC", // deep-security-blue-200
          300: "#9FB3C8", // deep-security-blue-300
          400: "#829AB1", // deep-security-blue-400
          500: "#627D98", // deep-security-blue-500
          600: "#486581", // deep-security-blue-600
          700: "#334E68", // deep-security-blue-700
          800: "#243B53", // deep-security-blue-800
          900: "#1E3A5F", // deep-security-blue-900
        },
        // Secondary Colors - Professional Charcoal
        secondary: {
          DEFAULT: "#2C3E50", // professional-charcoal
          50: "#F7F8F9", // professional-charcoal-50
          100: "#E8EAED", // professional-charcoal-100
          200: "#D1D5DB", // professional-charcoal-200
          300: "#9CA3AF", // professional-charcoal-300
          400: "#6B7280", // professional-charcoal-400
          500: "#4B5563", // professional-charcoal-500
          600: "#374151", // professional-charcoal-600
          700: "#2C3E50", // professional-charcoal-700
          800: "#1F2937", // professional-charcoal-800
          900: "#111827", // professional-charcoal-900
        },
        // Accent Colors - Scorpion Gold
        accent: {
          DEFAULT: "#D4AF37", // scorpion-gold
          50: "#FEFCF0", // scorpion-gold-50
          100: "#FEF7CD", // scorpion-gold-100
          200: "#FEEE9B", // scorpion-gold-200
          300: "#FDE047", // scorpion-gold-300
          400: "#FACC15", // scorpion-gold-400
          500: "#EAB308", // scorpion-gold-500
          600: "#D4AF37", // scorpion-gold-600
          700: "#A16207", // scorpion-gold-700
          800: "#854D0E", // scorpion-gold-800
          900: "#713F12", // scorpion-gold-900
        },
        // Background Colors
        background: "#FAFBFC", // clean-canvas
        surface: "#F8F9FA", // subtle-elevation
        // Text Colors
        text: {
          primary: "#1A202C", // professional-clarity
          secondary: "#4A5568", // supporting-information
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'protective': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'critical': '0 10px 25px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-strong': '0 0 30px rgba(212, 175, 55, 0.5)',
      },
      animation: {
        'scan': 'scan 1200ms ease-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        scan: {
          '0%, 100%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}