"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Mail, Search, AlertCircle, CheckCircle, Download, Plus, Settings } from "lucide-react";

export default function DesignSystemPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchValue, setSwitchValue] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const toggleInputError = () => {
    setInputError(!inputError);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
          <p className="text-muted-foreground mt-2">
            Interactive showcase of UI components with TweakCN theme and comprehensive interaction states
          </p>
        </div>

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="controls">Controls</TabsTrigger>
            <TabsTrigger value="basic">Basic</TabsTrigger>
          </TabsList>

          <TabsContent value="buttons" className="mt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
                <p className="text-sm text-muted-foreground mb-6">All button variants with proper TweakCN theme colors</p>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
                <p className="text-sm text-muted-foreground mb-6">Different sizes for various use cases</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Button States</h3>
                <p className="text-sm text-muted-foreground mb-6">Interactive states including loading and disabled</p>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={handleLoadingDemo} loading={isLoading}>
                    {isLoading ? "Loading..." : "Click for Loading"}
                  </Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>
                    Disabled Outline
                  </Button>
                  <Button variant="destructive" disabled>
                    Disabled Destructive
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Buttons with Icons</h3>
                <p className="text-sm text-muted-foreground mb-6">Combining icons with text for better UX</p>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                  <Button variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                  <Button variant="secondary">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="ghost">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button size="icon" variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Hover & Focus States</h3>
                <p className="text-sm text-muted-foreground mb-6">Try hovering and focusing these buttons to see the interactions</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
                  <Button className="focus-visible:ring-2">Focus Me</Button>
                  <Button variant="outline" className="hover:scale-105 transition-transform">Hover Effect</Button>
                  <Button variant="secondary">Hover & Focus</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inputs" className="mt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Input Fields</h3>
                <p className="text-sm text-muted-foreground mb-6">Text inputs with proper border colors and focus states</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  <div className="space-y-2">
                    <Label htmlFor="input-default">Default Input</Label>
                    <Input 
                      id="input-default"
                      placeholder="Enter text..." 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="input-error">Error State</Label>
                    <Input 
                      id="input-error"
                      placeholder="This has an error" 
                      error={inputError}
                    />
                    <Button size="sm" variant="outline" onClick={toggleInputError}>
                      Toggle Error
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="input-disabled">Disabled</Label>
                    <Input 
                      id="input-disabled"
                      placeholder="Disabled input" 
                      disabled 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="input-email">Email</Label>
                    <Input 
                      id="input-email"
                      type="email" 
                      placeholder="Enter email..." 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="input-password">Password</Label>
                    <Input 
                      id="input-password"
                      type="password" 
                      placeholder="Enter password..." 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="input-search">Search</Label>
                    <Input 
                      id="input-search"
                      type="search" 
                      placeholder="Search..." 
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Textarea</h3>
                <p className="text-sm text-muted-foreground mb-6">Multi-line text input with resize disabled</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  <div className="space-y-2">
                    <Label htmlFor="textarea-default">Default Textarea</Label>
                    <Textarea 
                      id="textarea-default"
                      placeholder="Enter your message..." 
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="textarea-error">Error State</Label>
                    <Textarea 
                      id="textarea-error"
                      placeholder="This has an error..." 
                      error={inputError}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Select Dropdown</h3>
                <p className="text-sm text-muted-foreground mb-6">Dropdown selection with proper styling</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                  <div className="space-y-2">
                    <Label htmlFor="select-default">Choose Option</Label>
                    <Select value={selectValue} onValueChange={setSelectValue}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                        <SelectItem value="option4">Option 4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="select-disabled">Disabled Select</Label>
                    <Select disabled>
                      <SelectTrigger>
                        <SelectValue placeholder="Disabled select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="controls" className="mt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Checkbox</h3>
                <p className="text-sm text-muted-foreground mb-6">Checkbox controls with different states</p>
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="checkbox1" 
                      checked={checkboxValue}
                      onCheckedChange={(checked) => setCheckboxValue(checked === true)}
                    />
                    <Label htmlFor="checkbox1">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox2" />
                    <Label htmlFor="checkbox2">Subscribe to newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox3" defaultChecked />
                    <Label htmlFor="checkbox3">Remember me</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox4" disabled />
                    <Label htmlFor="checkbox4">Disabled checkbox</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox5" disabled checked />
                    <Label htmlFor="checkbox5">Disabled checked</Label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Radio Group</h3>
                <p className="text-sm text-muted-foreground mb-6">Single selection from multiple options</p>
                <RadioGroup value={radioValue} onValueChange={setRadioValue} className="max-w-md">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="radio1" />
                    <Label htmlFor="radio1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="radio2" />
                    <Label htmlFor="radio2">Option 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="radio3" />
                    <Label htmlFor="radio3">Option 3</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option4" id="radio4" disabled />
                    <Label htmlFor="radio4">Disabled option</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Switch</h3>
                <p className="text-sm text-muted-foreground mb-6">Toggle switches for boolean settings</p>
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="switch1" 
                      checked={switchValue}
                      onCheckedChange={setSwitchValue}
                    />
                    <Label htmlFor="switch1">Enable notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch2" />
                    <Label htmlFor="switch2">Dark mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch3" defaultChecked />
                    <Label htmlFor="switch3">Auto-save</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch4" disabled />
                    <Label htmlFor="switch4">Disabled switch</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch5" disabled checked />
                    <Label htmlFor="switch5">Disabled checked</Label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="basic" className="mt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Cards</h3>
                <p className="text-sm text-muted-foreground mb-6">Card components with hover effects and proper theme colors</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Card</CardTitle>
                      <CardDescription>
                        A simple card with header and content sections.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Card content goes here. This demonstrates the basic card layout with proper spacing.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Interactive Card</CardTitle>
                      <CardDescription>
                        Card with interactive elements and controls.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="card-checkbox" />
                        <Label htmlFor="card-checkbox">Enable feature</Label>
                      </div>
                      <Button className="w-full" size="sm">
                        Take Action
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Status Card</CardTitle>
                      <CardDescription>
                        Card showing different status indicators.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Status</span>
                        <Badge variant="success">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Priority</span>
                        <Badge variant="warning">High</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Type</span>
                        <Badge variant="outline">System</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Badges</h3>
                <p className="text-sm text-muted-foreground mb-6">Status indicators and labels with hover effects</p>
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Alerts</h3>
                <p className="text-sm text-muted-foreground mb-6">Important messages and notifications</p>
                <div className="space-y-4 max-w-2xl">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a default alert with an information icon.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a destructive alert indicating an error or warning.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-green-200 bg-green-50 text-green-800">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a success alert indicating successful completion.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a warning alert for important notifications.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}