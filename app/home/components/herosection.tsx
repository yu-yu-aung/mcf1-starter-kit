import React from 'react'
import Image from "next/image";
import heroImg from "../../public/images/hero.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <div className='h-screen grid grid-cols-2 justify-center items-center mb-0'>
            <div className="col-span-1 justify-center w-full space-y-10">
                <div className="text-5xl font-[petrovFont] space-y-2">
                    <h1>Bring your brand</h1>
                    <h1>to the counter</h1>
                </div>
                <h4 className="text-lg text-muted-foreground w-4/5">The all-in-one POS built to sync your online shop with your brick-and-mortar store. Manage every sale and every customer from one place. Start free, then get 3 months for $9.99/month.</h4>
                <div className='space-y-2 w-4/5'>
                    <Input type="email" placeholder="Enter your email address" className="text-base! px-3 py-6" />
                    <Button className="w-full py-6 text-base">Start free trail</Button>
                    <p className='text-muted-foreground text-sm'>You agree to receive our marketing emails. </p>
                </div>
            </div>
            <div className="col-span-1 justify-center items-center w-full space-y-10">
                <Image src={heroImg} alt="hero" width={500} className="mx-auto object-cover border border-gray-200 rounded-xl shadow-2xs" />
            </div>
        </div>
    )
}

export default HeroSection