import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
        // Existing shadcn/ui and chart colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },

        // =====================================================================
        // Primitive Colors (from tokens.css)
        // =====================================================================
        'gray-white': 'rgb(var(--gray-white) / <alpha-value>)',
        'gray-110': 'rgb(var(--gray-110) / <alpha-value>)',
        'gray-100': 'rgb(var(--gray-100) / <alpha-value>)',
        'gray-90': 'rgb(var(--gray-90) / <alpha-value>)',
        'gray-80': 'rgb(var(--gray-80) / <alpha-value>)',
        'gray-70': 'rgb(var(--gray-70) / <alpha-value>)',
        'gray-60': 'rgb(var(--gray-60) / <alpha-value>)',
        'gray-50': 'rgb(var(--gray-50) / <alpha-value>)',
        'gray-40': 'rgb(var(--gray-40) / <alpha-value>)',
        'gray-30': 'rgb(var(--gray-30) / <alpha-value>)',
        'gray-20': 'rgb(var(--gray-20) / <alpha-value>)',
        'gray-10': 'rgb(var(--gray-10) / <alpha-value>)',
        'gray-black': 'rgb(var(--gray-black) / <alpha-value>)',
        'green-100': 'rgb(var(--green-100) / <alpha-value>)',
        'green-90': 'rgb(var(--green-90) / <alpha-value>)',
        'green-80': 'rgb(var(--green-80) / <alpha-value>)',
        'green-70': 'rgb(var(--green-70) / <alpha-value>)',
        'green-60': 'rgb(var(--green-60) / <alpha-value>)',
        'green-50': 'rgb(var(--green-50) / <alpha-value>)',
        'green-40': 'rgb(var(--green-40) / <alpha-value>)',
        'green-30': 'rgb(var(--green-30) / <alpha-value>)',
        'green-20': 'rgb(var(--green-20) / <alpha-value>)',
        'green-10': 'rgb(var(--green-10) / <alpha-value>)',
        'red-100': 'rgb(var(--red-100) / <alpha-value>)',
        'red-90': 'rgb(var(--red-90) / <alpha-value>)',
        'red-80': 'rgb(var(--red-80) / <alpha-value>)',
        'red-70': 'rgb(var(--red-70) / <alpha-value>)',
        'red-60': 'rgb(var(--red-60) / <alpha-value>)',
        'red-50': 'rgb(var(--red-50) / <alpha-value>)',
        'red-40': 'rgb(var(--red-40) / <alpha-value>)',
        'red-30': 'rgb(var(--red-30) / <alpha-value>)',
        'red-20': 'rgb(var(--red-20) / <alpha-value>)',
        'red-10': 'rgb(var(--red-10) / <alpha-value>)',
        'orange-100': 'rgb(var(--orange-100) / <alpha-value>)',
        'orange-90': 'rgb(var(--orange-90) / <alpha-value>)',
        'orange-80': 'rgb(var(--orange-80) / <alpha-value>)',
        'orange-70': 'rgb(var(--orange-70) / <alpha-value>)',
        'orange-60': 'rgb(var(--orange-60) / <alpha-value>)',
        'orange-50': 'rgb(var(--orange-50) / <alpha-value>)',
        'orange-40': 'rgb(var(--orange-40) / <alpha-value>)',
        'orange-30': 'rgb(var(--orange-30) / <alpha-value>)',
        'orange-20': 'rgb(var(--orange-20) / <alpha-value>)',
        'orange-10': 'rgb(var(--orange-10) / <alpha-value>)',
        'lime-100': 'rgb(var(--lime-100) / <alpha-value>)',
        'lime-90': 'rgb(var(--lime-90) / <alpha-value>)',
        'lime-80': 'rgb(var(--lime-80) / <alpha-value>)',
        'lime-70': 'rgb(var(--lime-70) / <alpha-value>)',
        'lime-60': 'rgb(var(--lime-60) / <alpha-value>)',
        'lime-50': 'rgb(var(--lime-50) / <alpha-value>)',
        'lime-40': 'rgb(var(--lime-40) / <alpha-value>)',
        'lime-30': 'rgb(var(--lime-30) / <alpha-value>)',
        'lime-20': 'rgb(var(--lime-20) / <alpha-value>)',
        'lime-10': 'rgb(var(--lime-10) / <alpha-value>)',
        'amber-100': 'rgb(var(--amber-100) / <alpha-value>)',
        'amber-90': 'rgb(var(--amber-90) / <alpha-value>)',
        'amber-80': 'rgb(var(--amber-80) / <alpha-value>)',
        'amber-70': 'rgb(var(--amber-70) / <alpha-value>)',
        'amber-60': 'rgb(var(--amber-60) / <alpha-value>)',
        'amber-50': 'rgb(var(--amber-50) / <alpha-value>)',
        'amber-40': 'rgb(var(--amber-40) / <alpha-value>)',
        'amber-30': 'rgb(var(--amber-30) / <alpha-value>)',
        'amber-20': 'rgb(var(--amber-20) / <alpha-value>)',
        'amber-10': 'rgb(var(--amber-10) / <alpha-value>)',
        'blue-100': 'rgb(var(--blue-100) / <alpha-value>)',
        'blue-90': 'rgb(var(--blue-90) / <alpha-value>)',
        'blue-80': 'rgb(var(--blue-80) / <alpha-value>)',
        'blue-70': 'rgb(var(--blue-70) / <alpha-value>)',
        'blue-60': 'rgb(var(--blue-60) / <alpha-value>)',
        'blue-50': 'rgb(var(--blue-50) / <alpha-value>)',
        'blue-40': 'rgb(var(--blue-40) / <alpha-value>)',
        'blue-30': 'rgb(var(--blue-30) / <alpha-value>)',
        'blue-20': 'rgb(var(--blue-20) / <alpha-value>)',
        'blue-10': 'rgb(var(--blue-10) / <alpha-value>)',
        'magenta-100': 'rgb(var(--magenta-100) / <alpha-value>)',
        'magenta-90': 'rgb(var(--magenta-90) / <alpha-value>)',
        'magenta-80': 'rgb(var(--magenta-80) / <alpha-value>)',
        'magenta-70': 'rgb(var(--magenta-70) / <alpha-value>)',
        'magenta-60': 'rgb(var(--magenta-60) / <alpha-value>)',
        'magenta-50': 'rgb(var(--magenta-50) / <alpha-value>)',
        'magenta-40': 'rgb(var(--magenta-40) / <alpha-value>)',
        'magenta-30': 'rgb(var(--magenta-30) / <alpha-value>)',
        'magenta-20': 'rgb(var(--magenta-20) / <alpha-value>)',
        'magenta-10': 'rgb(var(--magenta-10) / <alpha-value>)',
        'yellow-100': 'rgb(var(--yellow-100) / <alpha-value>)',
        'yellow-90': 'rgb(var(--yellow-90) / <alpha-value>)',
        'yellow-80': 'rgb(var(--yellow-80) / <alpha-value>)',
        'yellow-70': 'rgb(var(--yellow-70) / <alpha-value>)',
        'yellow-60': 'rgb(var(--yellow-60) / <alpha-value>)',
        'yellow-50': 'rgb(var(--yellow-50) / <alpha-value>)',
        'yellow-40': 'rgb(var(--yellow-40) / <alpha-value>)',
        'yellow-30': 'rgb(var(--yellow-30) / <alpha-value>)',
        'yellow-20': 'rgb(var(--yellow-20) / <alpha-value>)',
        'yellow-10': 'rgb(var(--yellow-10) / <alpha-value>)',

        // =====================================================================
        // Semantic Tokens (from tokens.css)
        // =====================================================================
        'fg-primary': 'rgb(var(--fg-primary) / <alpha-value>)',
        'fg-secondary': 'rgb(var(--fg-secondary) / <alpha-value>)',
        'fg-tertiary': 'rgb(var(--fg-tertiary) / <alpha-value>)',
        'fg-quarternary': 'rgb(var(--fg-quarternary) / <alpha-value>)',
        'fg-inverse-primary': 'rgb(var(--fg-inverse-primary) / <alpha-value>)',
        'fg-inverse-secondary': 'rgb(var(--fg-inverse-secondary) / <alpha-value>)',
        'fg-inverse-tertiary': 'rgb(var(--fg-inverse-tertiary) / <alpha-value>)',
        'fg-inverse-quaternary': 'rgb(var(--fg-inverse-quaternary) / <alpha-value>)',
        'bg-primary': 'rgb(var(--bg-primary) / <alpha-value>)',
        'bg-primary-inverse': 'rgb(var(--bg-primary-inverse) / <alpha-value>)',
        'bg-secondary': 'rgb(var(--bg-secondary) / <alpha-value>)',
        'bg-tertiary': 'rgb(var(--bg-tertiary) / <alpha-value>)',
        'bg-state-disabled': 'rgb(var(--bg-state-disabled) / <alpha-value>)',
        'bg-overlayart': 'rgb(var(--bg-overlayart) / <alpha-value>)',
        'bg-overlaydark': 'rgb(var(--bg-overlaydark) / <alpha-value>)',
        'bg-accent': 'rgb(var(--bg-accent) / <alpha-value>)',
        'bg-error': 'rgb(var(--bg-error) / <alpha-value>)',
        'bg-warning': 'rgb(var(--bg-warning) / <alpha-value>)',
        'bg-success': 'rgb(var(--bg-success) / <alpha-value>)',
        'bg-accent-pale': 'rgb(var(--bg-accent-pale) / <alpha-value>)',
        'bg-error-pale': 'rgb(var(--bg-error-pale) / <alpha-value>)',
        'bg-warning-pale': 'rgb(var(--bg-warning-pale) / <alpha-value>)',
        'bg-faint': 'rgb(var(--bg-faint) / <alpha-value>)',
        'bg-pale': 'rgb(var(--bg-pale) / <alpha-value>)',
        'bg-success-pale': 'rgb(var(--bg-success-pale) / <alpha-value>)',
        'border-primary': 'rgb(var(--border-primary) / <alpha-value>)',
        'border-secondary': 'rgb(var(--border-secondary) / <alpha-value>)',
        'border-success': 'rgb(var(--border-success) / <alpha-value>)',
        'border-warning': 'rgb(var(--border-warning) / <alpha-value>)',
        'border-error': 'rgb(var(--border-error) / <alpha-value>)',
        'border-accent': 'rgb(var(--border-accent) / <alpha-value>)',
        'border-state-disabled': 'rgb(var(--border-state-disabled) / <alpha-value>)',
        'border-accent-faint': 'rgb(var(--border-accent-faint) / <alpha-value>)',
        'border-active': 'rgb(var(--border-active) / <alpha-value>)',
        'content-content-disabled': 'rgb(var(--content-content-disabled) / <alpha-value>)',
        'content-on-color': 'rgb(var(--content-on-color) / <alpha-value>)',
        'content-accent': 'rgb(var(--content-accent) / <alpha-value>)',
        'content-negative': 'rgb(var(--content-negative) / <alpha-value>)',
        'content-warning': 'rgb(var(--content-warning) / <alpha-value>)',
        'content-success': 'rgb(var(--content-success) / <alpha-value>)',

        // =====================================================================
        // Badge Colors (using semantic tokens)
        // =====================================================================
        badge: {
          success: 'rgb(var(--bg-success) / <alpha-value>)',
          error: 'rgb(var(--bg-error) / <alpha-value>)',
          warning: 'rgb(var(--bg-warning) / <alpha-value>)',
          accent: 'rgb(var(--bg-accent) / <alpha-value>)',
          info: 'rgb(var(--bg-accent-pale) / <alpha-value>)',
          neutral: 'rgb(var(--bg-secondary) / <alpha-value>)',
          successText: 'rgb(var(--content-success) / <alpha-value>)',
          errorText: 'rgb(var(--content-negative) / <alpha-value>)',
          warningText: 'rgb(var(--content-warning) / <alpha-value>)',
          accentText: 'rgb(var(--content-accent) / <alpha-value>)',
          neutralText: 'rgb(var(--fg-primary) / <alpha-value>)',
        },
  		},
  		fontSize: {
  			// Semantic font sizes using your tokens
  			'caption-2': 'var(--font-size-caption-2)',
  			'caption-1': 'var(--font-size-caption-1)',
  			'footnote': 'var(--font-size-footnote)',
  			'subheadline': 'var(--font-size-subheadline)',
  			'callout': 'var(--font-size-callout)',
  			'body': 'var(--font-size-body)',
  			'title-3': 'var(--font-size-title-3)',
  			'title-2': 'var(--font-size-title-2)',
  			'title-1': 'var(--font-size-title-1)',
  			'large-title': 'var(--font-size-large-title)',
  			'extra-large-title': 'var(--font-size-extra-large-title)',
  			// Override default Tailwind sizes to use your tokens
  			'xs': 'var(--font-size-caption-2)',
  			'sm': 'var(--font-size-caption-1)',
  			'base': 'var(--font-size-callout)',
  			'lg': 'var(--font-size-body)',
  			'xl': 'var(--font-size-title-3)',
  			'2xl': 'var(--font-size-title-2)',
  			'3xl': 'var(--font-size-title-1)',
  			'4xl': 'var(--font-size-large-title)',
  			'5xl': 'var(--font-size-extra-large-title)'
  		},
  		fontWeight: {
  			'regular': 'var(--font-weight-regular)',
  			'medium': 'var(--font-weight-medium)',
  			'semibold': 'var(--font-weight-semibold)',
  			'bold': 'var(--font-weight-bold)'
  		},
  		lineHeight: {
  			'tight': 'var(--line-height-tight)',
  			'normal': 'var(--line-height-normal)',
  			'relaxed': 'var(--line-height-relaxed)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;