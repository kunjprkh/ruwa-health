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
import { Loader2, Mail, Search, AlertCircle, CheckCircle } from "lucide-react";

export default function DesignSystemPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchValue, setSwitchValue] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
          <p className="text-muted-foreground mt-2">
            Interactive showcase of UI components built with shadcn/ui
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
                <div className="flex flex-wrap gap-4">
                  <Button onClick={handleLoadingDemo} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      "Click for Loading"
                    )}
                  </Button>
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>
                    Disabled Outline
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">With Icons</h3>
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
                    Continue
                    <Loader2 className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inputs" className="mt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Input</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                  <div>
                    <Label htmlFor="input-default">Default</Label>
                    <Input 
                      id="input-default"
                      placeholder="Enter text..." 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="input-disabled">Disabled</Label>
                    <Input 
                      id="input-disabled"
                      placeholder="Disabled input" 
                      disabled 
                    />
                  </div>
                  <div>
                    <Label htmlFor="input-email">Email</Label>
                    <Input 
                      id="input-email"
                      type="email" 
                      placeholder="Enter email..." 
                    />
                  </div>
                  <div>
                    <Label htmlFor="input-password">Password</Label>
                    <Input 
                      id="input-password"
                      type="password" 
                      placeholder="Enter password..." 
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Textarea</h3>
                <div className="max-w-md">
                  <Label htmlFor="textarea">Message</Label>
                  <Textarea 
                    id="textarea"
                    placeholder="Enter your message..." 
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Select</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                  <div>
                    <Label htmlFor="select-default">Default</Label>
                    <Select value={selectValue} onValueChange={setSelectValue}>
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
                  <div>
                    <Label htmlFor="select-disabled">Disabled</Label>
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
                <div className="space-y-4">
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
                    <Checkbox id="checkbox3" disabled />
                    <Label htmlFor="checkbox3">Disabled checkbox</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checkbox4" disabled checked />
                    <Label htmlFor="checkbox4">Disabled checked</Label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Radio Group</h3>
                <RadioGroup value={radioValue} onValueChange={setRadioValue}>
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
                <div className="space-y-4">
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
                    <Switch id="switch3" disabled />
                    <Label htmlFor="switch3">Disabled switch</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch4" disabled checked />
                    <Label htmlFor="switch4">Disabled checked</Label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="basic" className="mt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Card</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>
                        This is a card description explaining the content.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Card content goes here. This is where you would put the main content of your card.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Interactive Card</CardTitle>
                      <CardDescription>
                        A card with interactive elements.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="card-checkbox" />
                        <Label htmlFor="card-checkbox">Enable feature</Label>
                      </div>
                      <Button className="w-full">Action Button</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Badge</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Alert</h3>
                <div className="space-y-4 max-w-2xl">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a default alert with an icon.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a destructive alert indicating an error.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-green-200 bg-green-50 text-green-800">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a success alert indicating completion.
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