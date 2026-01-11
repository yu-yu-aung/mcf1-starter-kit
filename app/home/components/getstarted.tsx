import { Button } from '@/components/ui/button'
import { Blocks } from 'lucide-react'
import React from 'react'

const GetStarted = () => {
    return (
        <div className="space-y-10 mb-30 py-30 flex items-center flex-col justify-center bg-primary/10 relative w-screen left-1/2 -translate-x-1/2">
            <h4 className="mb-2 uppercase tracking-widest text-center text-primary font-semibold text-sm">Ready to get started?</h4>
            <h1 className="text-4xl md:text-5xl text-center font-[petrovFont]">
                Start your free trial today.
            </h1>
            <h4 className="text-base text-center text-muted-foreground w-3/5">The all-in-one Experience the future of retail with our all-in-one platform. Join thousands of merchants and see how simple managing your business can be.</h4>
            <Button className="text-base px-4 py-6">
                <Blocks />
                Start trial for free
            </Button>
        </div>
    )
}

export default GetStarted