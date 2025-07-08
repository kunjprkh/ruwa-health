"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  Triangle, 
  Loader2, 
  Settings, 
  User, 
  Download,
  Plus,
  Search,
  Bell,
  Calendar,
  ChevronDown,
  Star,
  Heart,
  Share
} from "lucide-react"

// Component wrapper for clean display
const ComponentExample = ({ 
  label, 
  children, 
  className = "",
  description = ""
}: { 
  label: string
  children: React.ReactNode
  className?: string
  description?: string
}) => (
  <div className={`p-6 border border-border rounded-lg bg-card hover:bg-card/80 transition-colors ${className}`}>
    <div className="mb-4">
      <div className="text-sm font-semibold text-foreground mb-1 font-mono">
        {label}
      </div>
      {description && (
        <div className="text-xs text-muted-foreground">
          {description}
        </div>
      )}
    </div>
    <div className="flex items-center justify-center min-h-[80px] py-4">
      {children}
    </div>
  </div>
)

// Section wrapper with better typography
const Section = ({ 
  title, 
  description,
  children 
}: { 
  title: string
  description?: string
  children: React.ReactNode 
}) => (
  <section className="space-y-8">
    <div className="space-y-2">
      <h2 className="text-3xl font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg">
          {description}
        </p>
      )}
      <Separator className="my-4" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </section>
)

export default function StyleguidePage() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})
  const [progress, setProgress] = useState(33)
  const [sliderValue, setSliderValue] = useState([50])

  const handleLoading = (key: string) => {
    setLoadingStates(prev => ({ ...prev, [key]: true }))
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [key]: false }))
    }, 2000)
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-8 py-12 max-w-[1400px]">
          {/* Header */}
          <div className="mb-16 text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Design System</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete component library built with TweakCN, shadcn/ui, and custom design tokens. 
              All components are interactive and show real states.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline">TweakCN</Badge>
              <Badge variant="outline">shadcn/ui</Badge>
              <Badge variant="outline">Custom Tokens</Badge>
            </div>
          </div>

          <div className="space-y-16">
            {/* Color Palette */}
            <Section 
              title="Color Palette" 
              description="Custom design tokens with semantic naming"
            >
              <ComponentExample label="Primary Colors" className="col-span-full">
                <div className="grid grid-cols-5 gap-4 w-full">
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-gray-black rounded border"></div>
                    <div className="text-xs text-center">Black</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-gray-30 rounded border"></div>
                    <div className="text-xs text-center">Gray 30</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-gray-70 rounded border"></div>
                    <div className="text-xs text-center">Gray 70</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-gray-100 rounded border"></div>
                    <div className="text-xs text-center">Gray 100</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-gray-white rounded border"></div>
                    <div className="text-xs text-center">White</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Accent Colors" className="col-span-full">
                <div className="grid grid-cols-4 gap-4 w-full">
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-blue-70 rounded"></div>
                    <div className="text-xs text-center">Blue 70</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-green-50 rounded"></div>
                    <div className="text-xs text-center">Green 50</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-red-60 rounded"></div>
                    <div className="text-xs text-center">Red 60</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-amber-40 rounded"></div>
                    <div className="text-xs text-center">Amber 40</div>
                  </div>
                </div>
              </ComponentExample>
            </Section>

            {/* Typography */}
            <Section 
              title="Typography" 
              description="Complete typography system with all weight variants"
            >
              <ComponentExample label="Extra Large Title (48px)" className="col-span-full">
                <div className="space-y-4 w-full text-left">
                  <div className="text-extra-large-title-regular text-foreground">
                    Extra Large Title Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-extra-large-title-regular</div>
                  </div>
                  <div className="text-extra-large-title-medium text-foreground">
                    Extra Large Title Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-extra-large-title-medium</div>
                  </div>
                  <div className="text-extra-large-title-bold text-foreground">
                    Extra Large Title Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-extra-large-title-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Large Title (34px)" className="col-span-full">
                <div className="space-y-4 w-full text-left">
                  <div className="text-large-title-regular text-foreground">
                    Large Title Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-large-title-regular</div>
                  </div>
                  <div className="text-large-title-medium text-foreground">
                    Large Title Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-large-title-medium</div>
                  </div>
                  <div className="text-large-title-bold text-foreground">
                    Large Title Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-large-title-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Title 1 (28px)" className="col-span-full">
                <div className="space-y-3 w-full text-left">
                  <div className="text-title-1-regular text-foreground">
                    Title 1 Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-1-regular</div>
                  </div>
                  <div className="text-title-1-medium text-foreground">
                    Title 1 Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-1-medium</div>
                  </div>
                  <div className="text-title-1-bold text-foreground">
                    Title 1 Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-1-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Title 2 (24px)" className="col-span-full">
                <div className="space-y-3 w-full text-left">
                  <div className="text-title-2-regular text-foreground">
                    Title 2 Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-2-regular</div>
                  </div>
                  <div className="text-title-2-medium text-foreground">
                    Title 2 Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-2-medium</div>
                  </div>
                  <div className="text-title-2-bold text-foreground">
                    Title 2 Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-2-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Title 3 (20px)" className="col-span-full">
                <div className="space-y-3 w-full text-left">
                  <div className="text-title-3-regular text-foreground">
                    Title 3 Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-3-regular</div>
                  </div>
                  <div className="text-title-3-medium text-foreground">
                    Title 3 Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-3-medium</div>
                  </div>
                  <div className="text-title-3-bold text-foreground">
                    Title 3 Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-title-3-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Body (17px)">
                <div className="space-y-3 text-left">
                  <div className="text-body-regular text-foreground">
                    Body Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-body-regular</div>
                  </div>
                  <div className="text-body-medium text-foreground">
                    Body Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-body-medium</div>
                  </div>
                  <div className="text-body-bold text-foreground">
                    Body Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-body-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Callout (16px)">
                <div className="space-y-3 text-left">
                  <div className="text-callout-regular text-foreground">
                    Callout Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-callout-regular</div>
                  </div>
                  <div className="text-callout-medium text-foreground">
                    Callout Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-callout-medium</div>
                  </div>
                  <div className="text-callout-bold text-foreground">
                    Callout Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-callout-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Subheadline (15px)">
                <div className="space-y-3 text-left">
                  <div className="text-subheadline-regular text-foreground">
                    Subheadline Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-subheadline-regular</div>
                  </div>
                  <div className="text-subheadline-medium text-foreground">
                    Subheadline Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-subheadline-medium</div>
                  </div>
                  <div className="text-subheadline-bold text-foreground">
                    Subheadline Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-subheadline-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Footnote (13px)">
                <div className="space-y-3 text-left">
                  <div className="text-footnote-regular text-foreground">
                    Footnote Regular
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-footnote-regular</div>
                  </div>
                  <div className="text-footnote-medium text-foreground">
                    Footnote Medium
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-footnote-medium</div>
                  </div>
                  <div className="text-footnote-bold text-foreground">
                    Footnote Bold
                    <div className="text-caption-1-regular text-muted-foreground mt-1">text-footnote-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Caption 1 (12px)">
                <div className="space-y-3 text-left">
                  <div className="text-caption-1-regular text-foreground">
                    Caption 1 Regular
                    <div className="text-caption-2-regular text-muted-foreground mt-1">text-caption-1-regular</div>
                  </div>
                  <div className="text-caption-1-medium text-foreground">
                    Caption 1 Medium
                    <div className="text-caption-2-regular text-muted-foreground mt-1">text-caption-1-medium</div>
                  </div>
                  <div className="text-caption-1-bold text-foreground">
                    Caption 1 Bold
                    <div className="text-caption-2-regular text-muted-foreground mt-1">text-caption-1-bold</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Caption 2 (11px)">
                <div className="space-y-3 text-left">
                  <div className="text-caption-2-regular text-foreground">
                    Caption 2 Regular
                    <div className="text-caption-2-regular text-muted-foreground mt-1">text-caption-2-regular</div>
                  </div>
                  <div className="text-caption-2-medium text-foreground">
                    Caption 2 Medium
                    <div className="text-caption-2-regular text-muted-foreground mt-1">text-caption-2-medium</div>
                  </div>
                  <div className="text-caption-2-bold text-foreground">
                    Caption 2 Bold
                    <div className="text-caption-2-regular text-muted-foreground mt-1">text-caption-2-bold</div>
                  </div>
                </div>
              </ComponentExample>
            </Section>

            {/* Buttons */}
            <Section 
              title="Buttons" 
              description="All button variants with hover and loading states"
            >
              <ComponentExample label="Primary Button" description="Default action button">
                <Button>Primary Button</Button>
              </ComponentExample>

              <ComponentExample label="Secondary Button" description="Secondary actions">
                <Button variant="secondary">Secondary Button</Button>
              </ComponentExample>

              <ComponentExample label="Destructive Button" description="Dangerous actions">
                <Button variant="destructive">Delete Item</Button>
              </ComponentExample>

              <ComponentExample label="Outline Button" description="Subtle call-to-action">
                <Button variant="outline">Outline Button</Button>
              </ComponentExample>

              <ComponentExample label="Ghost Button" description="Minimal button style">
                <Button variant="ghost">Ghost Button</Button>
              </ComponentExample>

              <ComponentExample label="Link Button" description="Text-like button">
                <Button variant="link">Link Button</Button>
              </ComponentExample>

              <ComponentExample label="Loading State" description="Button with spinner">
                <Button 
                  disabled={loadingStates.primary}
                  onClick={() => handleLoading('primary')}
                >
                  {loadingStates.primary ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Click to Load"
                  )}
                </Button>
              </ComponentExample>

              <ComponentExample label="Disabled State" description="Non-interactive button">
                <Button disabled>Disabled Button</Button>
              </ComponentExample>

              <ComponentExample label="Icon Buttons" description="Buttons with icons">
                <div className="flex gap-2">
                  <Button size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </ComponentExample>

              <ComponentExample label="Button Sizes" description="Different button sizes">
                <div className="flex items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </ComponentExample>
            </Section>

            {/* Form Inputs */}
            <Section 
              title="Form Inputs" 
              description="All input types with validation states"
            >
              <ComponentExample label="Text Input" description="Basic text input">
                <div className="space-y-2 w-full max-w-sm">
                  <Label htmlFor="text">Text Input</Label>
                  <Input id="text" placeholder="Enter text..." />
                </div>
              </ComponentExample>

              <ComponentExample label="Password Input" description="Masked text input">
                <div className="space-y-2 w-full max-w-sm">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password..." />
                </div>
              </ComponentExample>

              <ComponentExample label="Textarea" description="Multi-line text input">
                <div className="space-y-2 w-full max-w-sm">
                  <Label htmlFor="textarea">Textarea</Label>
                  <Textarea id="textarea" placeholder="Enter description..." />
                </div>
              </ComponentExample>

              <ComponentExample label="Select Dropdown" description="Choose from options">
                <div className="space-y-2 w-full max-w-sm">
                  <Label>Select Option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </ComponentExample>

              <ComponentExample label="Checkbox" description="Boolean selection">
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox" />
                  <Label htmlFor="checkbox">Accept terms and conditions</Label>
                </div>
              </ComponentExample>

              <ComponentExample label="Radio Group" description="Single selection from group">
                <RadioGroup defaultValue="option1" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="radio1" />
                    <Label htmlFor="radio1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="radio2" />
                    <Label htmlFor="radio2">Option 2</Label>
                  </div>
                </RadioGroup>
              </ComponentExample>

              <ComponentExample label="Switch" description="Toggle control">
                <div className="flex items-center space-x-2">
                  <Switch id="switch" />
                  <Label htmlFor="switch">Enable notifications</Label>
                </div>
              </ComponentExample>

              <ComponentExample label="Slider" description="Range input control">
                <div className="space-y-4 w-full max-w-sm">
                  <Label>Volume: {sliderValue[0]}%</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                  />
                </div>
              </ComponentExample>

              <ComponentExample label="Error State" description="Input with validation error">
                <div className="space-y-2 w-full max-w-sm">
                  <Label htmlFor="error">Email Address</Label>
                  <Input 
                    id="error" 
                    type="email" 
                    placeholder="Enter email..." 
                    className="border-destructive focus-visible:ring-destructive"
                  />
                  <p className="text-sm text-destructive">Please enter a valid email address</p>
                </div>
              </ComponentExample>

              <ComponentExample label="Disabled State" description="Non-interactive input">
                <div className="space-y-2 w-full max-w-sm">
                  <Label htmlFor="disabled">Disabled Input</Label>
                  <Input id="disabled" placeholder="Can't edit this" disabled />
                </div>
              </ComponentExample>
            </Section>

            {/* Alerts & Notifications */}
            <Section 
              title="Alerts & Notifications" 
              description="Messages and status indicators"
            >
              <ComponentExample label="Info Alert" description="General information" className="col-span-full">
                <Alert className="w-full">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert with helpful details for the user.
                  </AlertDescription>
                </Alert>
              </ComponentExample>

              <ComponentExample label="Success Alert" description="Positive confirmation" className="col-span-full">
                <Alert className="w-full border-green-500 text-green-600 [&>svg]:text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    Your action was completed successfully! Changes have been saved.
                  </AlertDescription>
                </Alert>
              </ComponentExample>

              <ComponentExample label="Warning Alert" description="Important caution" className="col-span-full">
                <Alert className="w-full border-amber-500 text-amber-600 [&>svg]:text-amber-600">
                  <Triangle className="h-4 w-4" />
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please review your settings before continuing with this action.
                  </AlertDescription>
                </Alert>
              </ComponentExample>

              <ComponentExample label="Error Alert" description="Critical issues" className="col-span-full">
                <Alert variant="destructive" className="w-full">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again or contact support.
                  </AlertDescription>
                </Alert>
              </ComponentExample>
            </Section>

            {/* Cards & Containers */}
            <Section 
              title="Cards & Containers" 
              description="Content organization and layout"
            >
              <ComponentExample label="Basic Card" description="Simple content container">
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>A brief description of the card content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This is the main content area of the card component.
                    </p>
                  </CardContent>
                </Card>
              </ComponentExample>

              <ComponentExample label="Card with Actions" description="Interactive card with buttons">
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Project Card</CardTitle>
                    <CardDescription>Manage your project settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Status</span>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm text-muted-foreground">75%</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button size="sm">View Details</Button>
                  </CardFooter>
                </Card>
              </ComponentExample>

              <ComponentExample label="User Profile Card" description="Card with avatar and info">
                <Card className="w-full max-w-sm">
                  <CardHeader className="text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-2">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>Product Designer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" size="sm">Message</Button>
                      <Button size="sm">Follow</Button>
                    </div>
                  </CardContent>
                </Card>
              </ComponentExample>
            </Section>

            {/* Navigation & Menus */}
            <Section 
              title="Navigation & Menus" 
              description="User interface navigation"
            >
              <ComponentExample label="Dropdown Menu" description="Contextual menu options">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Open Menu
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ComponentExample>

              <ComponentExample label="Tabs Navigation" description="Section switching">
                <Tabs defaultValue="account" className="w-full max-w-md">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-4">
                    <p className="text-sm text-muted-foreground">Manage your account settings here.</p>
                  </TabsContent>
                  <TabsContent value="password" className="mt-4">
                    <p className="text-sm text-muted-foreground">Change your password here.</p>
                  </TabsContent>
                  <TabsContent value="settings" className="mt-4">
                    <p className="text-sm text-muted-foreground">Configure your preferences here.</p>
                  </TabsContent>
                </Tabs>
              </ComponentExample>

              <ComponentExample label="Accordion" description="Collapsible content sections">
                <Accordion type="single" collapsible className="w-full max-w-md">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Getting Started</AccordionTrigger>
                    <AccordionContent>
                      Learn the basics of using our platform with this quick guide.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Advanced Features</AccordionTrigger>
                    <AccordionContent>
                      Explore powerful features for experienced users.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Support</AccordionTrigger>
                    <AccordionContent>
                      Get help and find answers to common questions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ComponentExample>
            </Section>

            {/* Data Display */}
            <Section 
              title="Data Display" 
              description="Information presentation components"
            >
              <ComponentExample label="Data Table" description="Structured data display" className="col-span-full">
                <div className="w-full max-w-2xl">
                  <Table>
                    <TableCaption>Recent transactions</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Jan 15, 2024</TableCell>
                        <TableCell>Coffee Shop</TableCell>
                        <TableCell>
                          <Badge variant="outline">Food</Badge>
                        </TableCell>
                        <TableCell className="text-right">$4.50</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jan 14, 2024</TableCell>
                        <TableCell>Monthly Subscription</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Software</Badge>
                        </TableCell>
                        <TableCell className="text-right">$29.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jan 13, 2024</TableCell>
                        <TableCell>Gas Station</TableCell>
                        <TableCell>
                          <Badge variant="outline">Transport</Badge>
                        </TableCell>
                        <TableCell className="text-right">$45.20</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </ComponentExample>

              <ComponentExample label="Progress Bar" description="Task completion indicator">
                <div className="space-y-4 w-full max-w-sm">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Upload Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                  >
                    Simulate Progress
                  </Button>
                </div>
              </ComponentExample>

              <ComponentExample label="Avatar Gallery" description="User profile images">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback className="text-xs">+5</AvatarFallback>
                  </Avatar>
                </div>
              </ComponentExample>
            </Section>

            {/* Badges & Status */}
            <Section 
              title="Badges & Status" 
              description="Labels and status indicators"
            >
              <ComponentExample label="Badge Variants" description="Different badge styles">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </ComponentExample>

              <ComponentExample label="Status Badges" description="Application status indicators">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-50 text-green-700 border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    Online
                  </Badge>
                  <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                    Away
                  </Badge>
                  <Badge className="bg-red-50 text-red-700 border-red-200">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                    Offline
                  </Badge>
                </div>
              </ComponentExample>

              <ComponentExample label="Interactive Badges" description="Clickable status indicators">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    <Star className="w-3 h-3 mr-1" />
                    Favorite
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    <Heart className="w-3 h-3 mr-1" />
                    Like
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    <Share className="w-3 h-3 mr-1" />
                    Share
                  </Badge>
                </div>
              </ComponentExample>
            </Section>

            {/* Loading States */}
            <Section 
              title="Loading States" 
              description="Progress and loading indicators"
            >
              <ComponentExample label="Skeleton Loading" description="Content placeholder">
                <div className="space-y-3 w-full max-w-sm">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample label="Spinner Variants" description="Loading spinners">
                <div className="flex items-center gap-4">
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                </div>
              </ComponentExample>

              <ComponentExample label="Loading Button" description="Button with loading state">
                <Button 
                  disabled={loadingStates.loading}
                  onClick={() => handleLoading('loading')}
                >
                  {loadingStates.loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Start Process"
                  )}
                </Button>
              </ComponentExample>
            </Section>

            {/* Tooltips & Popovers */}
            <Section 
              title="Tooltips & Popovers" 
              description="Contextual information display"
            >
              <ComponentExample label="Basic Tooltip" description="Hover for information">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover for tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip message</p>
                  </TooltipContent>
                </Tooltip>
              </ComponentExample>

              <ComponentExample label="Icon Tooltip" description="Info icon with tooltip">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Additional information about this feature</p>
                  </TooltipContent>
                </Tooltip>
              </ComponentExample>

              <ComponentExample label="Action Tooltips" description="Tooltips on action buttons">
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="outline">
                        <Bell className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Notifications</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="outline">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Calendar</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </ComponentExample>
            </Section>

            {/* Modals & Dialogs */}
            <Section 
              title="Modals & Dialogs" 
              description="Overlay content and interactions"
            >
              <ComponentExample label="Basic Dialog" description="Simple modal dialog">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a basic dialog with a title and description. You can add any content here.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        Dialog content goes here. This could be a form, additional information, or any other content.
                      </p>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Confirm</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </ComponentExample>

              <ComponentExample label="Confirmation Dialog" description="Action confirmation modal">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Delete Item</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Deletion</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this item? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2 pt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive">Delete</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </ComponentExample>

              <ComponentExample label="Form Dialog" description="Modal with form inputs">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Add New Item</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Item</DialogTitle>
                      <DialogDescription>
                        Fill out the form below to add a new item to your collection.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter item name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Enter description" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Add Item</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </ComponentExample>
            </Section>

            {/* Design Tokens Reference */}
            <Section 
              title="Design Tokens Reference" 
              description="Your custom token system"
            >
              <ComponentExample label="Spacing Scale" description="Custom spacing tokens" className="col-span-full">
                <div className="grid grid-cols-8 gap-2 w-full">
                  {[2, 4, 8, 10, 12, 16, 20, 24].map((size) => (
                    <div key={size} className="text-center">
                      <div 
                        className="bg-primary mx-auto mb-2" 
                        style={{ 
                          width: `var(--space-${size})`, 
                          height: `var(--space-${size})` 
                        }}
                      ></div>
                      <div className="text-xs font-mono">--space-{size}</div>
                    </div>
                  ))}
                </div>
              </ComponentExample>

              <ComponentExample label="Border Radius Scale" description="Custom radius tokens" className="col-span-full">
                <div className="grid grid-cols-4 gap-4 w-full">
                  {[
                    { name: 'small', value: 'var(--radius-small)' },
                    { name: 'medium', value: 'var(--radius-medium)' },
                    { name: 'large', value: 'var(--radius-large)' },
                    { name: 'full', value: 'var(--radius-full)' }
                  ].map((radius) => (
                    <div key={radius.name} className="text-center">
                      <div 
                        className="w-16 h-16 bg-primary mx-auto mb-2" 
                        style={{ borderRadius: radius.value }}
                      ></div>
                      <div className="text-xs font-mono">--radius-{radius.name}</div>
                    </div>
                  ))}
                </div>
              </ComponentExample>
            </Section>

            {/* Badge Primary & Secondary Variants */}
            <Section 
              title="Badge Primary & Secondary Variants" 
              description="Showcasing all new primary and secondary badge color variants using design tokens and CVA."
            >
              <ComponentExample label="Green Primary">
                <Badge variant="green-primary">Green Primary</Badge>
              </ComponentExample>
              <ComponentExample label="Green Secondary">
                <Badge variant="green-secondary">Green Secondary</Badge>
              </ComponentExample>
              <ComponentExample label="Red Primary">
                <Badge variant="red-primary">Red Primary</Badge>
              </ComponentExample>
              <ComponentExample label="Red Secondary">
                <Badge variant="red-secondary">Red Secondary</Badge>
              </ComponentExample>
              <ComponentExample label="Orange Primary">
                <Badge variant="orange-primary">Orange Primary</Badge>
              </ComponentExample>
              <ComponentExample label="Orange Secondary">
                <Badge variant="orange-secondary">Orange Secondary</Badge>
              </ComponentExample>
              <ComponentExample label="Blue Primary">
                <Badge variant="blue-primary">Blue Primary</Badge>
              </ComponentExample>
              <ComponentExample label="Blue Secondary">
                <Badge variant="blue-secondary">Blue Secondary</Badge>
              </ComponentExample>
              <ComponentExample label="Yellow Primary">
                <Badge variant="yellow-primary">Yellow Primary</Badge>
              </ComponentExample>
              <ComponentExample label="Yellow Secondary">
                <Badge variant="yellow-secondary">Yellow Secondary</Badge>
              </ComponentExample>
              <ComponentExample label="Amber Primary">
                <Badge variant="amber-primary">Amber Primary</Badge>
              </ComponentExample>
              <ComponentExample label="Amber Secondary">
                <Badge variant="amber-secondary">Amber Secondary</Badge>
              </ComponentExample>
              <ComponentExample label="Magenta Primary">
                <Badge variant="magenta-primary">Magenta Primary</Badge>
              </ComponentExample>
              <ComponentExample label="Magenta Secondary">
                <Badge variant="magenta-secondary">Magenta Secondary</Badge>
              </ComponentExample>
              <ComponentExample label="Lime Secondary">
                <Badge variant="lime-secondary">Lime Secondary</Badge>
              </ComponentExample>
            </Section>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center py-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-2">🎉 Your Design System is Complete!</h3>
            <p className="text-muted-foreground mb-4">
              40+ components • Custom tokens • Fully interactive • Dark/Light mode ready
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="outline">Accessible</Badge>
              <Badge variant="outline">Responsive</Badge>
              <Badge variant="outline">Customizable</Badge>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}