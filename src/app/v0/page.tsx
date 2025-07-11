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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { ChevronRight, Loader2, Mail, Search, AlertCircle } from "lucide-react";
import BiomarkerTable from "@/components/ui/biomarker-table";
import { type BiomarkerData } from "@/components/ui/biomarker-table-row";

export default function DesignSystemPage() {
  const [radioValue, setRadioValue] = useState("option1");
  const [selectValue, setSelectValue] = useState("");
  const [biomarkers, setBiomarkers] = useState<BiomarkerData[]>([
    {
      id: "1",
      name: "Glucose",
      value: 1200,
      unit: "mg/dL",
      referenceRange: "70-100",
      status: "Out Of Range",
      confidenceScore: 95
    },
    {
      id: "2", 
      name: "Insulin",
      value: 25,
      unit: "μIU/mL",
      referenceRange: "2.6-24.9",
      status: "Peak",
      confidenceScore: 88
    },
    {
      id: "3",
      name: "HbA1c",
      value: 5.7,
      unit: "%",
      referenceRange: "<5.7",
      status: "Normal",
      confidenceScore: 65
    },
    {
      id: "4",
      name: "Cholesterol",
      value: 180,
      unit: "mg/dL", 
      referenceRange: "<200",
      status: "Normal",
      confidenceScore: 92
    }
  ]);


  const handleBiomarkerUpdate = async (id: string, newValue: number): Promise<void> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setBiomarkers(prev => prev.map(b => 
      b.id === id ? { ...b, value: newValue } : b
    ));
  };


  return (
    <div className="min-h-screen bg-black text-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
          <p className="text-muted-foreground mt-2">
            shadcn/ui components with official documentation examples
          </p>
        </div>

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="controls">Controls</TabsTrigger>
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="biomarker">Biomarker</TabsTrigger>
          </TabsList>

          <TabsContent value="buttons" className="mt-6">
            <div className="space-y-8">
              {/* Button Variants */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Button Sizes</h3>
                <div className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Button with Icons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">With Icons</h3>
                <div className="flex gap-4">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Login with Email
                  </Button>
                  <Button variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>

              {/* Loading and Disabled States */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Loading and Disabled States</h3>
                <div className="flex gap-4">
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inputs" className="mt-6">
            <div className="space-y-8">
              {/* Basic Input */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Input</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Input type="email" placeholder="Email" />
                </div>
              </div>

              {/* Input with Label */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Input with Label</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
              </div>

              {/* Input Variations */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Input Variations</h3>
                <div className="grid w-full max-w-sm gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="disabled">Disabled</Label>
                    <Input disabled type="email" id="disabled" placeholder="Email" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="file">File</Label>
                    <Input id="file" type="file" />
                  </div>
                </div>
              </div>

              {/* Textarea */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Textarea</h3>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea placeholder="Type your message here." id="message" />
                </div>
              </div>

              {/* Textarea Disabled */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Textarea Disabled</h3>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message-2">Your message</Label>
                  <Textarea placeholder="Type your message here." id="message-2" disabled />
                </div>
              </div>

              {/* Input with Button */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Input with Button</h3>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="controls" className="mt-6">
            <div className="space-y-8">
              {/* Checkbox */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Checkbox</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms2" />
                    <Label htmlFor="terms2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      You agree to our Terms of Service and Privacy Policy.
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled" disabled />
                    <Label htmlFor="disabled">Disabled checkbox</Label>
                  </div>
                </div>
              </div>

              {/* Radio Group */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Radio Group</h3>
                <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="option1" />
                    <Label htmlFor="option1">Option One</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="option2" />
                    <Label htmlFor="option2">Option Two</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="option3" />
                    <Label htmlFor="option3">Option Three</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option4" id="option4" disabled />
                    <Label htmlFor="option4">Option Four (Disabled)</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Switch */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Switch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode-2" />
                    <Label htmlFor="airplane-mode-2">Airplane Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="disabled-switch" disabled />
                    <Label htmlFor="disabled-switch">Disabled</Label>
                  </div>
                </div>
              </div>

              {/* Select */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Select</h3>
                <div className="w-[180px]">
                  <Select value={selectValue} onValueChange={setSelectValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Select Disabled */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Select Disabled</h3>
                <div className="w-[180px]">
                  <Select disabled>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="basic" className="mt-6">
            <div className="space-y-8">
              {/* Card */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Card</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                  <Card className="w-[350px]">
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Badge */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Badge</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge>Badge</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                {/* New color variants - two-row layout */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <Badge variant="green">Green</Badge>
                  <Badge variant="red">Red</Badge>
                  <Badge variant="orange">Orange</Badge>
                  <Badge variant="blue">Blue</Badge>
                  <Badge variant="amber">Amber</Badge>
                  <Badge variant="magenta">Magenta</Badge>
                  <Badge variant="yellow">Yellow</Badge>
                </div>
                <div className="flex flex-wrap gap-6">
                  <Badge variant="green-secondary">Green Secondary</Badge>
                  <Badge variant="red-secondary">Red Secondary</Badge>
                  <Badge variant="orange-secondary">Orange Secondary</Badge>
                  <Badge variant="blue-secondary">Blue Secondary</Badge>
                  <Badge variant="amber-secondary">Amber Secondary</Badge>
                  <Badge variant="magenta-secondary">Magenta Secondary</Badge>
                  <Badge variant="yellow-secondary">Yellow Secondary</Badge>
                </div>
                {/* Biomarker Status Badges */}
                <div className="flex flex-wrap gap-6 mt-4">
                  <Badge variant="peak">Peak</Badge>
                  <Badge variant="critical">Critical</Badge>
                  <Badge variant="out_of_range">Out Of Range</Badge>
                  <Badge variant="normal">Normal</Badge>
                </div>
              </div>

              {/* Alert */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Alert</h3>
                <div className="space-y-4 max-w-md">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your session will expire in 5 minutes.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your session has expired. Please log in again.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="biomarker" className="mt-6">
            <div className="space-y-8">
              {/* Biomarker Table Header */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Biomarker Table Row</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Interactive biomarker data rows with inline editing, confidence indicators, and status badges.
                  Click on any value to edit, use Enter to save or Escape to cancel.
                </p>
              </div>

              {/* Biomarker Table */}
              <BiomarkerTable 
                data={biomarkers}
                onValueUpdate={handleBiomarkerUpdate}
              />

              {/* Feature Documentation */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Interaction Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Inline Editing:</strong> Click any value to edit in place
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Keyboard Shortcuts:</strong> Enter to save, Escape to cancel
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Number Formatting:</strong> Automatic comma separators (1,000)
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Validation:</strong> Real-time numeric input validation
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Visual Indicators</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="h-6 rounded-sm flex-shrink-0" style={{width: '6px', backgroundColor: '#c9c9cd'}}></div>
                      <div>
                        <strong>High Confidence (≥90%):</strong> gray-80
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 rounded-sm flex-shrink-0" style={{width: '6px', backgroundColor: '#555556'}}></div>
                      <div>
                        <strong>Medium Confidence (70-89%):</strong> gray-40
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 rounded-sm flex-shrink-0" style={{width: '6px', backgroundColor: '#232324'}}></div>
                      <div>
                        <strong>Low Confidence (&lt;70%):</strong> gray-20
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="secondary" className="text-xs">Status</Badge>
                      <div>
                        <strong>Status Badges:</strong> Peak, Normal, Out of Range
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Input States Demo */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Input States</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <Label>Default State</Label>
                    <Input 
                      value="1,000" 
                      readOnly 
                      className="border border-border text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Hover State</Label>
                    <Input 
                      value="1,000" 
                      readOnly 
                      className="border-2 border-border text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Focused State</Label>
                    <Input 
                      value="1,000" 
                      readOnly 
                      className="border-2 border-primary ring-1 ring-ring text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Error State</Label>
                    <Input 
                      value="invalid" 
                      readOnly 
                      className="border-2 border-destructive ring-1 ring-destructive/20 text-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}