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
  			'gray-white': 'var(--gray-white)',
  			'gray-110': 'var(--gray-110)',
  			'gray-100': 'var(--gray-100)',
  			'gray-90': 'var(--gray-90)',
  			'gray-80': 'var(--gray-80)',
  			'gray-70': 'var(--gray-70)',
  			'gray-60': 'var(--gray-60)',
  			'gray-50': 'var(--gray-50)',
  			'gray-40': 'var(--gray-40)',
  			'gray-30': 'var(--gray-30)',
  			'gray-20': 'var(--gray-20)',
  			'gray-10': 'var(--gray-10)',
  			'gray-black': 'var(--gray-black)',
  			'green-100': 'var(--green-100)',
  			'green-90': 'var(--green-90)',
  			'green-80': 'var(--green-80)',
  			'green-70': 'var(--green-70)',
  			'green-60': 'var(--green-60)',
  			'green-50': 'var(--green-50)',
  			'green-40': 'var(--green-40)',
  			'green-30': 'var(--green-30)',
  			'green-20': 'var(--green-20)',
  			'green-10': 'var(--green-10)',
  			'red-100': 'var(--red-100)',
  			'red-90': 'var(--red-90)',
  			'red-80': 'var(--red-80)',
  			'red-70': 'var(--red-70)',
  			'red-60': 'var(--red-60)',
  			'red-50': 'var(--red-50)',
  			'red-40': 'var(--red-40)',
  			'red-30': 'var(--red-30)',
  			'red-20': 'var(--red-20)',
  			'red-10': 'var(--red-10)',
  			'orange-100': 'var(--orange-100)',
  			'orange-90': 'var(--orange-90)',
  			'orange-80': 'var(--orange-80)',
  			'orange-70': 'var(--orange-70)',
  			'orange-60': 'var(--orange-60)',
  			'orange-50': 'var(--orange-50)',
  			'orange-40': 'var(--orange-40)',
  			'orange-30': 'var(--orange-30)',
  			'orange-20': 'var(--orange-20)',
  			'orange-10': 'var(--orange-10)',
  			'lime-100': 'var(--lime-100)',
  			'lime-90': 'var(--lime-90)',
  			'lime-80': 'var(--lime-80)',
  			'lime-70': 'var(--lime-70)',
  			'lime-60': 'var(--lime-60)',
  			'lime-50': 'var(--lime-50)',
  			'lime-40': 'var(--lime-40)',
  			'lime-30': 'var(--lime-30)',
  			'lime-20': 'var(--lime-20)',
  			'lime-10': 'var(--lime-10)',
  			'amber-100': 'var(--amber-100)',
  			'amber-90': 'var(--amber-90)',
  			'amber-80': 'var(--amber-80)',
  			'amber-70': 'var(--amber-70)',
  			'amber-60': 'var(--amber-60)',
  			'amber-50': 'var(--amber-50)',
  			'amber-40': 'var(--amber-40)',
  			'amber-30': 'var(--amber-30)',
  			'amber-20': 'var(--amber-20)',
  			'amber-10': 'var(--amber-10)',
  			'blue-100': 'var(--blue-100)',
  			'blue-90': 'var(--blue-90)',
  			'blue-80': 'var(--blue-80)',
  			'blue-70': 'var(--blue-70)',
  			'blue-60': 'var(--blue-60)',
  			'blue-50': 'var(--blue-50)',
  			'blue-40': 'var(--blue-40)',
  			'blue-30': 'var(--blue-30)',
  			'blue-20': 'var(--blue-20)',
  			'blue-10': 'var(--blue-10)',
  			'magenta-100': 'var(--magenta-100)',
  			'magenta-90': 'var(--magenta-90)',
  			'magenta-80': 'var(--magenta-80)',
  			'magenta-70': 'var(--magenta-70)',
  			'magenta-60': 'var(--magenta-60)',
  			'magenta-50': 'var(--magenta-50)',
  			'magenta-40': 'var(--magenta-40)',
  			'magenta-30': 'var(--magenta-30)',
  			'magenta-20': 'var(--magenta-20)',
  			'magenta-10': 'var(--magenta-10)',
  			'yellow-100': 'var(--yellow-100)',
  			'yellow-90': 'var(--yellow-90)',
  			'yellow-80': 'var(--yellow-80)',
  			'yellow-70': 'var(--yellow-70)',
  			'yellow-60': 'var(--yellow-60)',
  			'yellow-50': 'var(--yellow-50)',
  			'yellow-40': 'var(--yellow-40)',
  			'yellow-30': 'var(--yellow-30)',
  			'yellow-20': 'var(--yellow-20)',
  			'yellow-10': 'var(--yellow-10)',
  			'fg-primary': 'var(--fg-primary)',
  			'fg-secondary': 'var(--fg-secondary)',
  			'fg-tertiary': 'var(--fg-tertiary)',
  			'fg-quarternary': 'var(--fg-quarternary)',
  			'fg-inverse-primary': 'var(--fg-inverse-primary)',
  			'fg-inverse-secondary': 'var(--fg-inverse-secondary)',
  			'fg-inverse-tertiary': 'var(--fg-inverse-tertiary)',
  			'fg-inverse-quaternary': 'var(--fg-inverse-quaternary)',
  			'bg-primary': 'var(--bg-primary)',
  			'bg-primary-inverse': 'var(--bg-primary-inverse)',
  			'bg-secondary': 'var(--bg-secondary)',
  			'bg-tertiary': 'var(--bg-tertiary)',
  			'bg-state-disabled': 'var(--bg-state-disabled)',
  			'bg-overlayart': 'var(--bg-overlayart)',
  			'bg-overlaydark': 'var(--bg-overlaydark)',
  			'bg-accent': 'var(--bg-accent)',
  			'bg-error': 'var(--bg-error)',
  			'bg-warning': 'var(--bg-warning)',
  			'bg-success': 'var(--bg-success)',
  			'bg-accent-pale': 'var(--bg-accent-pale)',
  			'bg-error-pale': 'var(--bg-error-pale)',
  			'bg-warning-pale': 'var(--bg-warning-pale)',
  			'bg-faint': 'var(--bg-faint)',
  			'bg-pale': 'var(--bg-pale)',
  			'bg-success-pale': 'var(--bg-success-pale)',
  			'border-primary': 'var(--border-primary)',
  			'border-secondary': 'var(--border-secondary)',
  			'border-success': 'var(--border-success)',
  			'border-warning': 'var(--border-warning)',
  			'border-error': 'var(--border-error)',
  			'border-accent': 'var(--border-accent)',
  			'border-state-disabled': 'var(--border-state-disabled)',
  			'border-accent-faint': 'var(--border-accent-faint)',
  			'border-active': 'var(--border-active)',
  			'content-content-disabled': 'var(--content-content-disabled)',
  			'content-on-color': 'var(--content-on-color)',
  			'content-accent': 'var(--content-accent)',
  			'content-negative': 'var(--content-negative)',
  			'content-warning': 'var(--content-warning)',
  			'content-success': 'var(--content-success)',
  			badge: {
  				success: 'var(--bg-success)',
  				error: 'var(--bg-error)',
  				warning: 'var(--bg-warning)',
  				accent: 'var(--bg-accent)',
  				info: 'var(--bg-accent-pale)',
  				neutral: 'var(--bg-secondary)',
  				successText: 'var(--content-success)',
  				errorText: 'var(--content-negative)',
  				warningText: 'var(--content-warning)',
  				accentText: 'var(--content-accent)',
  				neutralText: 'var(--fg-primary)'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontSize: {
  			'caption-2': 'var(--font-size-caption-2)',
  			'caption-1': 'var(--font-size-caption-1)',
  			footnote: 'var(--font-size-footnote)',
  			subheadline: 'var(--font-size-subheadline)',
  			callout: 'var(--font-size-callout)',
  			body: 'var(--font-size-body)',
  			'title-3': 'var(--font-size-title-3)',
  			'title-2': 'var(--font-size-title-2)',
  			'title-1': 'var(--font-size-title-1)',
  			'large-title': 'var(--font-size-large-title)',
  			'extra-large-title': 'var(--font-size-extra-large-title)',
  			xs: 'var(--font-size-caption-2)',
  			sm: 'var(--font-size-caption-1)',
  			base: 'var(--font-size-callout)',
  			lg: 'var(--font-size-body)',
  			xl: 'var(--font-size-title-3)',
  			'2xl': 'var(--font-size-title-2)',
  			'3xl': 'var(--font-size-title-1)',
  			'4xl': 'var(--font-size-large-title)',
  			'5xl': 'var(--font-size-extra-large-title)'
  		},
  		fontWeight: {
  			regular: 'var(--font-weight-regular)',
  			medium: 'var(--font-weight-medium)',
  			semibold: 'var(--font-weight-semibold)',
  			bold: 'var(--font-weight-bold)'
  		},
  		lineHeight: {
  			tight: 'var(--line-height-tight)',
  			normal: 'var(--line-height-normal)',
  			relaxed: 'var(--line-height-relaxed)'
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