import React from 'react'
import { Brain, Zap, ShieldAlert } from "lucide-react";

const problems = [
    {
        title: "Inventory Blind Spots",
        description: "Managing stock across channels shouldn't be a guessing game. Disconnected systems leave you with 'phantom stock,' leading to canceled orders and lost revenue.",
        icon: <Brain className="w-6 h-6 text-white" />,
    },
    {
        title: "The Checkout Bottleneck",
        description: "Every second your customer waits in line is a second they think about walking out. Outdated hardware causes friction during your busiest hours, costing you sales.",
        icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
        title: "Payment & Fraud Risk",
        description: "With credit card fraud on the rise, you need a system that handles end-to-end encryption and PCI compliance to protect your revenue and your customers' trust.",
        icon: <ShieldAlert className="w-6 h-6 text-white" />,
    },
];


const Problem = () => {
    return (
        <div className=' mb-40 py-20 bg-muted-foreground/5 relative w-screen left-1/2 -translate-x-1/2 '>
            <div className='mx-auto w-[90%] space-y-20'>
                {/* <h4 className="mb-2 uppercase tracking-widest text-center text-primary font-semibold text-sm">Problem</h4> */}
                <h1 className="text-4xl md:text-5xl font-[petrovFont]">
                    Traditional payment is costing you sales.
                </h1>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {problems.map((item, index) => (
                            <div key={index} className="flex flex-col items-start space-y-5">
                                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-medium tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Problem