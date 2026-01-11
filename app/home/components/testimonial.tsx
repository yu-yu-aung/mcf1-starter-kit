
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "Our morning rush used to be a nightmare with long lines. Since switching to this POS, checkout takes seconds, and our staff training time has been cut in half. It’s the backbone of our daily operations.",
        name: "Marcus Thorne",
        role: "Founder of Brew & Bean",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg"
    },
    {
        quote: "Managing inventory across three different boutique locations was impossible before. Now, everything is synced in real-time. If we sell a dress in-store, our online stock updates instantly. Game changer.",
        name: "Sarah Jenkins",
        role: "Owner of Bloom Boutique",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
        quote: "The analytics dashboard is what sets this apart. I can see exactly which menu items are driving my profit margins from my phone while I'm away from the restaurant. I finally feel in control of my data.",
        name: "Chef Julian Rossi",
        role: "Executive Chef at Luna Trattoria",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
    },
    {
        quote: "We needed a system that was as mobile as we are. Whether we are at a weekend farmers market or in our permanent storefront, the hardware is sleek, reliable, and always stays connected.",
        name: "Elena Rodriguez",
        role: "Director of Urban Greenery",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
    }
]

const Testimonial = () => {
    return (
        <div className="space-y-10 my-20">
            <h4 className="mb-2 uppercase tracking-widest text-center text-primary font-semibold text-sm">Testimonial Highlight</h4>
            <h1 className="text-5xl text-center font-[petrovFont]">
                What our customers are saying
            </h1>
            <div className="relative max-w-4xl mx-auto px-16">
                <Quote className="mx-auto " />
                <Carousel className="w-2/3 mx-auto pt-8">
                    <CarouselContent>
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index}>

                                <div className="flex flex-col items-center justify-center text-center px-4">
                                    <p className="text-base md:text-lg font-medium leading-snug">
                                        "{item.quote}"
                                    </p>

                                    <div className="mt-10 mb-6">
                                        <img
                                            src={item.logo}
                                            alt="Company Logo"
                                            className="h-10 w-auto grayscale opacity-40 hover:opacity-100 transition-opacity"
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold ">
                                        {item.name}
                                    </h3>
                                    <p className=" font-medium mt-1">
                                        {item.role}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="hover:text-primary" />
                    <CarouselNext className="hover:text-primary" />
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonial