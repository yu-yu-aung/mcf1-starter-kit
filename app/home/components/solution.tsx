
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const solutionData = [
    {
        title: "World's best checkout",
        description: "Fast, flexible, and converts 15% better than other platforms, on average — whether your customers are online.",
        image: "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       badges: ["Performance", "High Conversion", "Secure"]
    },
    {
        title: "Built-in AI tools",
        description: "Get more done with AI functionality that's built into every store, from background editing to smart stock alerts.",
        image: "https://images.unsplash.com/photo-1762330467572-5199bc772a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         badges: ["AI Powered", "Smart Inventory"],

    },
    {
        title: "Fast, reliable hosting",
        description: "Our 99.9% uptime keeps your store running smoothly, day and night, even during high-traffic sales.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badges: ["99.9% Uptime", "Global CDN", "24/7 Support"],

    }
]

const Solution = () => {
    return (
        <div className='space-y-20 mb-40'>
            <div className="space-y-4">
                <h4 className="mb-2 uppercase tracking-widest text-primary font-semibold text-sm">Our Solutions</h4>
                <h1 className="text-4xl md:text-5xl font-[petrovFont]">
                    Everything you need to run your shop.
                </h1>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutionData.map((item, index) => (
                    <Card key={index} className="relative w-full overflow-hidden pt-0 group border-gray-200">

                        <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-0 transition-opacity mix-blend-color" />

                        <div className="overflow-hidden aspect-video">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="relative z-20 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                            />
                        </div>

                        <CardHeader className="space-y-3">
                            <CardTitle className="text-2xl font-medium tracking-tight">
                                {item.title}
                            </CardTitle>
                            <CardDescription className="text-base leading-relaxed text-muted-foreground">
                                {item.description}
                            </CardDescription>
                        </CardHeader>

                        <CardFooter className="pt-4">
                            {item.badges.map((badge, idx) => (
                                <Badge key={idx} className="mr-2 mb-2 bg-muted text-muted-foreground">
                                    {badge}
                                </Badge>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Solution