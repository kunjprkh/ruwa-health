# Ruwa Design System

A modern, comprehensive design system built with Next.js 14, TypeScript, Tailwind CSS, and ShadCN UI components. Ruwa provides a solid foundation for building consistent, accessible, and beautiful user interfaces.

## ✨ Features

- 🎨 **Design Tokens**: Comprehensive color, spacing, and typography tokens
- 🌓 **Dark/Light Mode**: Seamless theme switching with next-themes
- 🧩 **Component Library**: Pre-built, customizable ShadCN UI components
- 📱 **Responsive**: Mobile-first design with Tailwind CSS
- ⚡ **Performance**: Optimized Next.js 14 with App Router
- 🔧 **Developer Experience**: TypeScript, ESLint, Prettier, and strict configuration
- 🚀 **Deployment Ready**: Configured for Vercel deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or later
- npm 9.0.0 or later

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunjprkh/ruwa-health.git
   cd ruwa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ruwa/
├── src/
│   ├── app/                  # Next.js 14 App Router
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles
│   │   └── styleguide/      # Design system documentation
│   ├── components/
│   │   ├── ui/              # ShadCN UI components
│   │   └── theme-provider.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── styles/
│       └── tokens.css       # Design tokens
├── public/                  # Static assets
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── components.json         # ShadCN UI configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment configuration
```

## 🎨 Design System

### Recent Updates & Decisions

#### **Latest Changes (2025-07-07)**
- ✅ **Button Component Redesign**: Complete overhaul with new sizing, animations, and semantic colors
- ✅ **Form Components Update**: Comprehensive styling updates for all form inputs
- ✅ **Typography System**: Enhanced with weight variants and semantic mappings
- ✅ **Framer Motion Integration**: Smooth animations with spring physics
- ✅ **Design Token Expansion**: Added opacity tokens and enhanced color mappings

### Design Tokens

Our design system is built on a foundation of design tokens that ensure consistency across all components and applications.

#### Color System
- **Semantic tokens**: `fg-primary`, `fg-secondary`, `fg-tertiary`, `fg-quarternary`
- **Background tokens**: `bg-primary`, `bg-secondary`, `bg-faint`, `bg-accent`
- **Border tokens**: `border-primary`, `border-accent`, `border-error`, `border-success`
- **Primitive colors**: Complete spectrum from `blue-10` to `blue-100`
- **Opacity system**: From 2% to 94% transparency for layering
- **Theme support**: Automatic light/dark mode with proper contrast ratios

#### Spacing Scale
- Consistent spacing from `space-0` (0rem) to `space-40` (5rem)
- Based on a 4px grid system: `space-2` (4px), `space-4` (8px), etc.
- Mapped to Tailwind's spacing utilities for seamless integration

#### Typography System
- **Font sizes**: `caption-2` (11px) to `extra-large-title` (48px)
- **Weight variants**: `regular`, `medium`, `semibold`, `bold`
- **Combined classes**: `text-subheadline-medium`, `text-body-regular`
- **Semantic line heights**: `tight` (1.2), `normal` (1.5), `relaxed` (1.6)
- **System font stack**: Optimized for each platform

#### Border Radius
- **Semantic radii**: `small` (2px), `medium` (8px), `large` (12px), `full` (9999px)
- Consistent across all components for visual harmony

### Components

Our component library is built on top of [ShadCN UI](https://ui.shadcn.com/) with custom design tokens and enhanced functionality:

#### **Button Component** ✨ *Recently Updated*
- **Sizes**: `default` (36px), `sm` (28px), `lg` (44px), `icon` (36px square)
- **Variants**: `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`
- **Animations**: Framer Motion with spring physics for smooth interactions
- **States**: Loading, disabled, with proper semantic colors
- **Typography**: `subheadline` font with `semibold` weight and tight tracking

#### **Form Components** ✨ *Recently Updated*
- **Input**: No border by default, `medium` radius, semantic text colors
- **Label**: `footnote` size with `medium` weight and `fg-secondary` color
- **Textarea**: Consistent styling with Input component
- **Select**: 36px height, large radius, `bg-secondary` background
- **Checkbox**: 20px size, small radius, semantic state colors
- **Radio Group**: Consistent sizing and semantic colors
- **Switch**: Enhanced with semantic background colors
- **Slider**: Updated with design token integration

#### **Layout & Navigation**
- **Theme Provider**: Seamless dark/light mode switching with next-themes
- **Card Components**: Consistent spacing and semantic backgrounds
- **Dialog & Modal**: Accessible overlays with proper z-index management

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Utilities
npm run clean        # Clean build artifacts
```

### Adding New Components

1. **Install ShadCN component**
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Customize with design tokens**
   Components automatically use your design tokens through Tailwind configuration.

3. **Update documentation**
   Add component examples to the style guide page.

### Design Token Workflow

1. **Define tokens** in `src/styles/tokens.css`
   - Use CSS custom properties for maximum flexibility
   - Include both light and dark mode values
   - Follow semantic naming conventions

2. **Map to Tailwind** in `tailwind.config.ts`
   - Extend theme with custom tokens
   - Create typography combinations with weight variants
   - Maintain compatibility with default Tailwind classes

3. **Use in components** with Tailwind classes
   - Prefer semantic tokens (`bg-bg-primary`) over primitives (`bg-blue-70`)
   - Use CVA (Class Variance Authority) for component variants
   - Implement proper TypeScript interfaces

4. **Document usage** in the style guide
   - Live examples in `/styleguide` page
   - Component state demonstrations
   - Interactive theme switching

### Key Development Decisions

#### **Animation Strategy**
- **Framer Motion**: Chosen for complex animations requiring physics
- **CSS Transitions**: Used for simple state changes and hover effects
- **Performance**: Client-side rendering with "use client" directive
- **Spring Physics**: Consistent bounce and damping across components

#### **Component Architecture**
- **CVA (Class Variance Authority)**: Type-safe variant management
- **Compound Components**: Complex components broken into sub-components
- **Forward Refs**: Proper ref forwarding for accessibility
- **Semantic Props**: Props match design system terminology

#### **Color System Philosophy**
- **Semantic First**: Use `fg-primary` instead of `text-white`
- **Opacity Layers**: Consistent transparency for layering effects
- **Theme Agnostic**: Components work in both light and dark themes
- **Accessibility**: WCAG AA contrast ratios maintained

#### **Typography Approach**
- **System Fonts**: Platform-optimized font stacks
- **Combined Classes**: `text-subheadline-medium` for efficiency
- **Responsive**: Mobile-first with `md:` breakpoint overrides
- **Letter Spacing**: Tight tracking for improved readability

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import in Vercel**
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure environment variables** (if needed)
   - Copy from `.env.example`
   - Add to Vercel dashboard

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy `out/` folder
- **Railway**: Connect GitHub repository
- **DigitalOcean App Platform**: Use Node.js buildpack

## 🎯 Usage Examples

### Using Design Tokens

```tsx
// ✅ Semantic tokens (recommended)
<div className="bg-bg-primary text-fg-primary border-border-accent">
  Content with semantic tokens
</div>

// ✅ Typography combinations
<h1 className="text-title-1-bold text-fg-primary">
  Large Title with Bold Weight
</h1>
<p className="text-body-regular text-fg-secondary">
  Body text with regular weight
</p>

// ✅ State-aware colors
<div className="border-2 border-border-error text-fg-error">
  Error state styling
</div>

// ⚠️ Primitive tokens (use sparingly)
<div className="bg-blue-70 text-gray-white">
  Direct primitive usage
</div>
```

### Theme Switching

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle theme
    </button>
  )
}
```

### Custom Components

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

// ✅ Custom button with proper variants
interface CustomButtonProps {
  variant?: 'primary' | 'secondary'
  loading?: boolean
  children: React.ReactNode
}

export function CustomButton({ variant = 'primary', loading, children }: CustomButtonProps) {
  return (
    <Button
      variant={variant === 'primary' ? 'default' : 'secondary'}
      loading={loading}
      className={cn(
        'text-subheadline font-semibold tracking-[-0.36px]',
        // Custom styling on top of variants
      )}
    >
      {children}
    </Button>
  )
}

// ✅ Form field with proper label/input relationship
interface FormFieldProps {
  label: string
  error?: string
  inputProps?: React.ComponentProps<typeof Input>
}

export function FormField({ label, error, inputProps }: FormFieldProps) {
  const id = React.useId()
  
  return (
    <div className="space-y-0">
      <Label htmlFor={id} className="flex p-px items-end gap-4 self-stretch">
        {label}
      </Label>
      <Input
        id={id}
        className={cn(
          error && "border-border-error focus-visible:border-border-error"
        )}
        {...inputProps}
      />
      {error && (
        <p className="text-caption-1-regular text-fg-error mt-1">
          {error}
        </p>
      )}
    </div>
  )
}
```

## 📋 Changelog

### [v1.2.0] - 2025-07-07 - Major Design System Updates

#### 🎨 **Button Component Redesign**
- **Breaking Changes**: New sizing system and semantic color usage
- **Added**: Framer Motion animations with spring physics
- **Added**: Loading states with spinner integration
- **Updated**: Typography to `subheadline` with `semibold` weight
- **Fixed**: Destructive variant text colors
- **Enhanced**: Icon button variants with proper sizing

#### 🏗️ **Form Components Overhaul**
- **Updated**: Input component with new specifications:
  - Removed border by default
  - `rounded-medium` (8px border radius)
  - `px-2 py-2` padding (8px)
  - Semantic text colors (`text-fg-quarternary`)
- **Updated**: Label component:
  - `text-footnote` size with `font-medium` weight
  - `text-fg-secondary` color
  - Flex layout with proper gap and alignment
- **Updated**: All form components (Textarea, Select, Checkbox, Radio, Switch, Slider)
- **Enhanced**: Consistent design token usage across all form elements

#### 🎭 **Typography System Enhancement**
- **Added**: Weight variant combinations (`text-body-medium`, `text-title-1-bold`)
- **Added**: Comprehensive font size scale from `caption-2` to `extra-large-title`
- **Added**: Semantic line height system (`tight`, `normal`, `relaxed`)
- **Updated**: Tailwind configuration with typography combinations
- **Enhanced**: System font stack optimization

#### 🌈 **Design Token Expansion**
- **Added**: Opacity token system (2% to 94% transparency)
- **Added**: Enhanced semantic color mappings
- **Updated**: Border radius system with semantic naming
- **Enhanced**: Color contrast ratios for accessibility
- **Improved**: Light/dark theme consistency

#### ⚡ **Performance & Developer Experience**
- **Added**: TypeScript interfaces for all component props
- **Added**: CVA (Class Variance Authority) for type-safe variants
- **Enhanced**: Build optimization and bundling
- **Improved**: Component tree shaking
- **Added**: Comprehensive documentation and examples

### [v1.1.0] - Previous Updates
- Initial ShadCN UI integration
- Basic design token system
- Theme provider setup
- Core component library
- Tailwind CSS configuration

### [v1.0.0] - Initial Release
- Next.js 14 App Router setup
- Basic project structure
- ESLint and Prettier configuration
- Vercel deployment setup

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run quality checks**
   ```bash
   npm run lint
   npm run type-check
   npm run format:check
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ShadCN](https://twitter.com/shadcn) for the amazing component library
- [Vercel](https://vercel.com) for the deployment platform
- [Tailwind Labs](https://tailwindlabs.com) for Tailwind CSS

---

Built with ❤️ by [Kunj Parekh](https://github.com/kunjprkh)