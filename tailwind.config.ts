import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		spacing: {
  			'0': 'var(--space-0)',
  			'2': 'var(--space-2)',
  			'4': 'var(--space-4)',
  			'8': 'var(--space-8)',
  			'10': 'var(--space-10)',
  			'12': 'var(--space-12)',
  			'14': 'var(--space-14)',
  			'16': 'var(--space-16)',
  			'18': 'var(--space-18)',
  			'20': 'var(--space-20)',
  			'22': 'var(--space-22)',
  			'24': 'var(--space-24)',
  			'26': 'var(--space-26)',
  			'28': 'var(--space-28)',
  			'30': 'var(--space-30)',
  			'32': 'var(--space-32)',
  			'34': 'var(--space-34)',
  			'36': 'var(--space-36)',
  			'38': 'var(--space-38)',
  			'40': 'var(--space-40)'
  		},
  		borderRadius: {
			// Keep your existing custom radius
			none: 'var(--radius-none)',
			small: 'var(--radius-small)',  	
			medium: 'var(--radius-medium)',
			large: 'var(--radius-large)',
			full: 'var(--radius-full)', 
			
			// Add standard shadcn radius (add these lines)
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
			
  		},
  		colors: {
			// Standard shadcn/ui colors (these will give you the default appearance)
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
			  DEFAULT: 'hsl(var(--primary))',
			  foreground: 'hsl(var(--primary-foreground))',
			},
			secondary: {
			  DEFAULT: 'hsl(var(--secondary))',
			  foreground: 'hsl(var(--secondary-foreground))',
			},
			destructive: {
			  DEFAULT: 'hsl(var(--destructive))',
			  foreground: 'hsl(var(--destructive-foreground))',
			},
			muted: {
			  DEFAULT: 'hsl(var(--muted))',
			  foreground: 'hsl(var(--muted-foreground))',
			},
			accent: {
			  DEFAULT: 'hsl(var(--accent))',
			  foreground: 'hsl(var(--accent-foreground))',
			},
			popover: {
			  DEFAULT: 'hsl(var(--popover))',
			  foreground: 'hsl(var(--popover-foreground))',
			},
			card: {
			  DEFAULT: 'hsl(var(--card))',
			  foreground: 'hsl(var(--card-foreground))',
			},
			
			// Your custom colors preserved with "ruwa-" prefix
			'ruwa-fg': {
			  primary: 'var(--fg-primary)',
			  secondary: 'var(--fg-secondary)',
			  tertiary: 'var(--fg-tertiary)',
			  quarternary: 'var(--fg-quarternary)',
			  success: 'var(--fg-success)',
			  warning: 'var(--fg-warning)',
			  error: 'var(--fg-error)',
			  inverse: {
				primary: 'var(--fg-inverse-primary)',
				secondary: 'var(--fg-inverse-secondary)',
				tertiary: 'var(--fg-inverse-tertiary)',
				quaternary: 'var(--fg-inverse-quaternary)'
			  }
			},
			'ruwa-bg': {
			  primary: 'var(--bg-primary)',
			  'primary-inverse': 'var(--bg-primary-inverse)',
			  secondary: 'var(--bg-secondary)',
			  tertiary: 'var(--bg-tertiary)',
			  disabled: 'var(--bg-state-disabled)',
			  accent: 'var(--bg-accent)',
			  negative: 'var(--bg-negative)',
			  warning: 'var(--bg-warning)',
			  positive: 'var(--bg-positive)',
			  'accent-pale': 'var(--bg-accent-pale)',
			  'negative-pale': 'var(--bg-negative-pale)',
			  'warning-pale': 'var(--bg-warning-pale)',
			  'positive-pale': 'var(--bg-positive-pale)',
			  faint: 'var(--bg-faint)',
			  pale: 'var(--bg-pale)',
			  overlayart: 'var(--bg-overlayart)',
			  overlaydark: 'var(--bg-overlaydark)'
			},
			'ruwa-border': {
			  primary: 'var(--border-primary)',
			  secondary: 'var(--border-secondary)',
			  success: 'var(--border-success)',
			  warning: 'var(--border-warning)',
			  error: 'var(--border-error)',
			  accent: 'var(--border-accent)',
			  disabled: 'var(--border-state-disabled)',
			  'accent-faint': 'var(--border-accent-faint)',
			  active: 'var(--border-active)'
			},
			'ruwa-content': {
			  disabled: 'var(--content-content-disabled)',
			  'on-color': 'var(--content-on-color)',
			  accent: 'var(--content-accent)',
			  negative: 'var(--content-negative)',
			  warning: 'var(--content-warning)',
			  success: 'var(--content-success)'
			},
			'ruwa-gray': {
			  '10': 'var(--gray-10)',
			  '20': 'var(--gray-20)',
			  '30': 'var(--gray-30)',
			  '40': 'var(--gray-40)',
			  '50': 'var(--gray-50)',
			  '60': 'var(--gray-60)',
			  '70': 'var(--gray-70)',
			  '80': 'var(--gray-80)',
			  '90': 'var(--gray-90)',
			  '100': 'var(--gray-100)',
			  '110': 'var(--gray-110)',
			  white: 'var(--gray-white)',
			  black: 'var(--gray-black)'
			},
			'ruwa-blue': {
			  '10': 'var(--blue-10)',
			  '20': 'var(--blue-20)',
			  '30': 'var(--blue-30)',
			  '40': 'var(--blue-40)',
			  '50': 'var(--blue-50)',
			  '60': 'var(--blue-60)',
			  '70': 'var(--blue-70)',
			  '80': 'var(--blue-80)',
			  '90': 'var(--blue-90)',
			  '100': 'var(--blue-100)'
			},
			'ruwa-green': {
			  '10': 'var(--green-10)',
			  '20': 'var(--green-20)',
			  '30': 'var(--green-30)',
			  '40': 'var(--green-40)',
			  '50': 'var(--green-50)',
			  '60': 'var(--green-60)',
			  '70': 'var(--green-70)',
			  '80': 'var(--green-80)',
			  '90': 'var(--green-90)',
			  '100': 'var(--green-100)'
			},
			'ruwa-red': {
			  '10': 'var(--red-10)',
			  '20': 'var(--red-20)',
			  '30': 'var(--red-30)',
			  '40': 'var(--red-40)',
			  '50': 'var(--red-50)',
			  '60': 'var(--red-60)',
			  '70': 'var(--red-70)',
			  '80': 'var(--red-80)',
			  '90': 'var(--red-90)',
			  '100': 'var(--red-100)'
			},
			'ruwa-yellow': {
			  '10': 'var(--yellow-10)',
			  '20': 'var(--yellow-20)',
			  '30': 'var(--yellow-30)',
			  '40': 'var(--yellow-40)',
			  '50': 'var(--yellow-50)',
			  '60': 'var(--yellow-60)',
			  '70': 'var(--yellow-70)',
			  '80': 'var(--yellow-80)',
			  '90': 'var(--yellow-90)',
			  '100': 'var(--yellow-100)'
			},
			'ruwa-orange': {
			  '10': 'var(--orange-10)',
			  '20': 'var(--orange-20)',
			  '30': 'var(--orange-30)',
			  '40': 'var(--orange-40)',
			  '50': 'var(--orange-50)',
			  '60': 'var(--orange-60)',
			  '70': 'var(--orange-70)',
			  '80': 'var(--orange-80)',
			  '90': 'var(--orange-90)',
			  '100': 'var(--orange-100)'
			},
			'ruwa-lime': {
			  '10': 'var(--lime-10)',
			  '20': 'var(--lime-20)',
			  '30': 'var(--lime-30)',
			  '40': 'var(--lime-40)',
			  '50': 'var(--lime-50)',
			  '60': 'var(--lime-60)',
			  '70': 'var(--lime-70)',
			  '80': 'var(--lime-80)',
			  '90': 'var(--lime-90)',
			  '100': 'var(--lime-100)'
			},
			'ruwa-amber': {
			  '10': 'var(--amber-10)',
			  '20': 'var(--amber-20)',
			  '30': 'var(--amber-30)',
			  '40': 'var(--amber-40)',
			  '50': 'var(--amber-50)',
			  '60': 'var(--amber-60)',
			  '70': 'var(--amber-70)',
			  '80': 'var(--amber-80)',
			  '90': 'var(--amber-90)',
			  '100': 'var(--amber-100)'
			},
			'ruwa-magenta': {
			  '10': 'var(--magenta-10)',
			  '20': 'var(--magenta-20)',
			  '30': 'var(--magenta-30)',
			  '40': 'var(--magenta-40)',
			  '50': 'var(--magenta-50)',
			  '60': 'var(--magenta-60)',
			  '70': 'var(--magenta-70)',
			  '80': 'var(--magenta-80)',
			  '90': 'var(--magenta-90)',
			  '100': 'var(--magenta-100)'
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
  			'5xl': 'var(--font-size-extra-large-title)',
			
			// Typography combinations with weight variants
			'extra-large-title-regular': ['var(--font-size-extra-large-title)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-tight)' }],
			'extra-large-title-medium': ['var(--font-size-extra-large-title)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-tight)' }],
			'extra-large-title-bold': ['var(--font-size-extra-large-title)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' }],
			'large-title-regular': ['var(--font-size-large-title)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-tight)' }],
			'large-title-medium': ['var(--font-size-large-title)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-tight)' }],
			'large-title-bold': ['var(--font-size-large-title)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' }],
			'title-1-regular': ['var(--font-size-title-1)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-tight)' }],
			'title-1-medium': ['var(--font-size-title-1)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-tight)' }],
			'title-1-bold': ['var(--font-size-title-1)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' }],
			'title-2-regular': ['var(--font-size-title-2)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-tight)' }],
			'title-2-medium': ['var(--font-size-title-2)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-tight)' }],
			'title-2-bold': ['var(--font-size-title-2)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' }],
			'title-3-regular': ['var(--font-size-title-3)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-tight)' }],
			'title-3-medium': ['var(--font-size-title-3)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-tight)' }],
			'title-3-bold': ['var(--font-size-title-3)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' }],
			'body-regular': ['var(--font-size-body)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-relaxed)' }],
			'body-medium': ['var(--font-size-body)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-relaxed)' }],
			'body-bold': ['var(--font-size-body)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-relaxed)' }],
			'callout-regular': ['var(--font-size-callout)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-normal)' }],
			'callout-medium': ['var(--font-size-callout)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-normal)' }],
			'callout-bold': ['var(--font-size-callout)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-normal)' }],
			'subheadline-regular': ['var(--font-size-subheadline)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-normal)' }],
			'subheadline-medium': ['var(--font-size-subheadline)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-normal)' }],
			'subheadline-bold': ['var(--font-size-subheadline)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-normal)' }],
			'footnote-regular': ['var(--font-size-footnote)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-normal)' }],
			'footnote-medium': ['var(--font-size-footnote)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-normal)' }],
			'footnote-bold': ['var(--font-size-footnote)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-normal)' }],
			'caption-1-regular': ['var(--font-size-caption-1)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-normal)' }],
			'caption-1-medium': ['var(--font-size-caption-1)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-normal)' }],
			'caption-1-bold': ['var(--font-size-caption-1)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-normal)' }],
			'caption-2-regular': ['var(--font-size-caption-2)', { fontWeight: 'var(--font-weight-regular)', lineHeight: 'var(--line-height-normal)' }],
			'caption-2-medium': ['var(--font-size-caption-2)', { fontWeight: 'var(--font-weight-medium)', lineHeight: 'var(--line-height-normal)' }],
			'caption-2-bold': ['var(--font-size-caption-2)', { fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-normal)' }]
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
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
}

export default config