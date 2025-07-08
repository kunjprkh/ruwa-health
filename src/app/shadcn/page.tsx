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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { 
  AlertCircle, 
  CheckCircle, 
  Triangle, 
  Settings, 
  User, 
  Check,
  ChevronsUpDown
} from "lucide-react"

// Component wrapper for clean display
const ComponentExample = ({ 
  label, 
  children, 
  className = "",
  description = "",
  code = ""
}: { 
  label: string
  children: React.ReactNode
  className?: string
  description?: string
  code?: string
}) => (
  <div className={`space-y-4 p-6 border rounded-lg bg-card hover:shadow-md transition-all ${className}`}>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{label}</h3>
        <Badge variant="outline" className="text-xs">shadcn/ui</Badge>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
    
    <div className="flex items-center justify-center min-h-[100px] p-4 rounded-md border bg-background">
      {children}
    </div>
    
    {code && (
      <details className="text-sm">
        <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
          Show code
        </summary>
        <pre className="mt-2 p-3 bg-muted rounded-md overflow-x-auto">
          <code>{code}</code>
        </pre>
      </details>
    )}
  </div>
)

// Section wrapper
const Section = ({ 
  title, 
  description,
  children 
}: { 
  title: string
  description?: string
  children: React.ReactNode 
}) => (
  <section className="space-y-6">
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
      <Separator />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </section>
)

export default function ShadcnComponentsPage() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [sliderValue, setSliderValue] = useState([50])
  const progress = 33;

  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ]

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-8 py-12 max-w-7xl">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <div className="h-4 w-4 rounded-sm bg-primary-foreground"></div>
              </div>
              <h1 className="text-4xl font-bold">shadcn/ui Components</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              All components have been updated to use standard shadcn/ui styling. 
              Copy and paste these components directly into your projects.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Standard Styling</Badge>
              <Badge variant="outline">Ready to Use</Badge>
              <Badge variant="outline">Type Safe</Badge>
              <Badge variant="outline">Accessible</Badge>
            </div>
          </div>

          <div className="space-y-12">
            {/* Form Components */}
            <Section 
              title="Form Components" 
              description="Essential form elements with standard shadcn styling"
            >
              <ComponentExample 
                label="Button"
                description="Primary action buttons with variants"
                code={`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>`}
              >
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Input"
                description="Text input with standard border and background"
                code={`<Label htmlFor="email">Email</Label>
<Input type="email" placeholder="Email" />`}
              >
                <div className="w-full max-w-sm space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" placeholder="Email" />
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Textarea"
                description="Multi-line text input"
                code={`<Label htmlFor="message">Message</Label>
<Textarea placeholder="Type your message here." />`}
              >
                <div className="w-full max-w-sm space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea placeholder="Type your message here." />
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Select"
                description="Dropdown selection component"
                code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`}
              >
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </ComponentExample>

              <ComponentExample 
                label="Checkbox"
                description="Binary choice input"
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
              >
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Radio Group"
                description="Single selection from multiple options"
                code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
              >
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                </RadioGroup>
              </ComponentExample>

              <ComponentExample 
                label="Switch"
                description="Toggle control"
                code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
              >
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Slider"
                description="Range input control"
                code={`<div className="w-full max-w-sm space-y-3">
  <Label>Volume: {sliderValue[0]}%</Label>
  <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
</div>`}
              >
                <div className="w-full max-w-sm space-y-3">
                  <Label>Volume: {sliderValue[0]}%</Label>
                  <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                </div>
              </ComponentExample>
            </Section>

            {/* Data Display */}
            <Section 
              title="Data Display" 
              description="Components for displaying content and data"
            >
              <ComponentExample 
                label="Badge"
                description="Status indicators and labels"
                code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
              >
                <div className="flex gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Avatar"
                description="User profile pictures"
                code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
              >
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Progress"
                description="Progress indicators"
                code={`<Progress value={progress} className="w-[60%]" />`}
              >
                <div className="w-full max-w-sm space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Skeleton"
                description="Loading placeholders"
                code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
              >
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Separator"
                description="Visual content dividers"
                code={`<div className="space-y-1">
  <h4 className="text-sm font-medium">Radix Primitives</h4>
  <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
</div>
<Separator className="my-4" />
<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>`}
              >
                <div className="w-full max-w-sm">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">Radix Primitives</h4>
                    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Blog</div>
                    <Separator orientation="vertical" />
                    <div>Docs</div>
                    <Separator orientation="vertical" />
                    <div>Source</div>
                  </div>
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Table"
                description="Structured data display"
                code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell><Badge variant="outline">Active</Badge></TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
              >
                <div className="w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Email</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell><Badge variant="outline">Active</Badge></TableCell>
                        <TableCell>john@example.com</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell><Badge>Online</Badge></TableCell>
                        <TableCell>jane@example.com</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </ComponentExample>
            </Section>

            {/* Feedback */}
            <Section 
              title="Feedback" 
              description="Alerts, notifications, and status indicators"
            >
              <ComponentExample 
                label="Alert"
                description="Important messages and notifications"
                code={`<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
              >
                <div className="w-full space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      You can add components to your app using the cli.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <Triangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Your session has expired. Please log in again.
                    </AlertDescription>
                  </Alert>
                </div>
              </ComponentExample>

              <ComponentExample 
                label="Spinner"
                description="Loading indicators"
                code={`<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />`}
              >
                <div className="flex items-center gap-4">
                  <Spinner size="sm" />
                  <Spinner />
                  <Spinner size="lg" />
                </div>
              </ComponentExample>
            </Section>

            {/* Overlays */}
            <Section 
              title="Overlays" 
              description="Modal dialogs, popovers, and overlay content"
            >
              <ComponentExample 
                label="Dialog"
                description="Modal dialogs for important actions"
                code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you&apos;re done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
    </div>
  </DialogContent>
</Dialog>`}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </ComponentExample>

              <ComponentExample 
                label="Tooltip"
                description="Contextual information on hover"
                code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </ComponentExample>

              <ComponentExample 
                label="Sheet"
                description="Slide-out panels"
                code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
              >
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </ComponentExample>

              <ComponentExample 
                label="Popover"
                description="Rich content in a popover"
                code={`<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button variant="outline" role="combobox" aria-expanded={open}>
      {value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework..."}
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[200px] p-0">
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandEmpty>No framework found.</CommandEmpty>
      <CommandGroup>
        {frameworks.map((framework) => (
          <CommandItem key={framework.value} onSelect={(currentValue) => {
            setValue(currentValue === value ? "" : currentValue)
            setOpen(false)
          }}>
            <Check className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
            {framework.label}
          </CommandItem>
        ))}
      </CommandGroup>
    </Command>
  </PopoverContent>
</Popover>`}
              >
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                    >
                      {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select framework..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                              }}
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  value === framework.value ? "opacity-100" : "opacity-0"
                                }`}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </ComponentExample>
            </Section>

            {/* Navigation */}
            <Section 
              title="Navigation" 
              description="Navigation components and menus"
            >
              <ComponentExample 
                label="Tabs"
                description="Organize content into tabs"
                code={`<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you&apos;re done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
      </CardContent>
    </Card>
  </TabsContent>
</Tabs>`}
              >
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                          Make changes to your account here. Click save when you&apos;re done.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" defaultValue="Pedro Duarte" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="password">
                    <Card>
                      <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                          Change your password here. After saving, you&apos;ll be logged out.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="current">Current password</Label>
                          <Input id="current" type="password" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </ComponentExample>

              <ComponentExample 
                label="Dropdown Menu"
                description="Context menus and dropdowns"
                code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ComponentExample>

              <ComponentExample 
                label="Accordion"
                description="Collapsible content sections"
                code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components&apos; aesthetic.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It&apos;s animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ComponentExample>
            </Section>

            {/* Layout */}
            <Section 
              title="Layout" 
              description="Cards and layout components"
            >
              <ComponentExample 
                label="Card"
                description="Flexible content containers"
                code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
              >
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="framework">Framework</Label>
                          <Select>
                            <SelectTrigger id="framework">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectItem value="next">Next.js</SelectItem>
                              <SelectItem value="sveltekit">SvelteKit</SelectItem>
                              <SelectItem value="astro">Astro</SelectItem>
                              <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                  </CardFooter>
                </Card>
              </ComponentExample>
            </Section>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center py-8 border-t">
            <h3 className="text-lg font-semibold mb-2">✨ Ready to Use</h3>
            <p className="text-muted-foreground mb-4">
              All components updated to use standard shadcn/ui styling • Copy code and use directly
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="outline">
                <CheckCircle className="w-3 h-3 mr-1" />
                Standard Styling
              </Badge>
              <Badge variant="outline">
                <CheckCircle className="w-3 h-3 mr-1" />
                Type Safe
              </Badge>
              <Badge variant="outline">
                <CheckCircle className="w-3 h-3 mr-1" />
                Accessible
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}