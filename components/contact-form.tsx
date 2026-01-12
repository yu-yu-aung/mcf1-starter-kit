'use client';

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Separator } from "@base-ui/react";

const inquiryTypes = [
  { label: "General Inquiry", value: "general" },
  { label: "Technical Support", value: "support" },
  { label: "Sales", value: "sales" },
  { label: "Partnership", value: "partnership" },
]


const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log("Form submitted:", Object.fromEntries(formData));
        // logic here
    }

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        const form = e.currentTarget.closest('form');
        form?.reset();
    }

    return (
        <Card className="rounded-lg">
            {/* Card Header  */}
            <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-base">
                    We typically respond within 24 hours
                </CardDescription>
            </CardHeader>

            <Separator className='border' />

            {/* Card Body  */}
            <CardContent>
                <form onSubmit={handleSubmit}>
                    {/* First Name and Last Name */}
                    <FieldGroup className="mb-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Field>
                                <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    required
                                />
                            </Field>
                        </div>
                    </FieldGroup>

                    {/* Email  */}
                    <Field className="mb-4">
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                        />
                    </Field>

                    {/* Phone Number  */}
                    <Field className="mb-4">
                        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                        />
                    </Field>

                    {/* Type  */}
                    <Field className="mb-4">
                        <FieldLabel htmlFor="inquiryType">Inquiry Type</FieldLabel>
                        <Select items={inquiryTypes} name="inquiryType" defaultValue={null}>
                            <SelectTrigger id="inquiryType">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {inquiryTypes.map((item) => (
                                    <SelectItem key={item.value} value={item.value}>
                                        {item.label}
                                    </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>

                    {/* Message  */}
                    <Field className="mb-4">
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us how we can help you..."
                            required
                            className="min-h-32"
                        />
                    </Field>
                    
                    {/* Clear and Submit Form  */}
                    <Field orientation="horizontal" className="gap-3">
                        <Button type="submit" className="flex-1 sm:flex-none">
                            Submit
                        </Button>
                        <Button variant="outline" type="button" onClick={handleClear} className="flex-1 sm:flex-none">
                            Clear
                        </Button>
                    </Field>

                </form>
            </CardContent>

        </Card>
    )
}

export default ContactForm;