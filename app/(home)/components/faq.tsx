
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        id: "item-1",
        question: "What hardware is compatible with your POS?",
        answer: "Our software is designed to be flexible. You can use our proprietary sleek hardware kits, or run the app on most modern iPads and Android tablets. We also support industry-standard receipt printers, cash drawers, and barcode scanners."
    },
    {
        id: "item-2",
        question: "Does the system work offline if my internet goes down?",
        answer: "Yes. Our 'Always-On' mode allows you to continue taking payments and ringing up customers even without a connection. Once your internet returns, all sales and inventory data will automatically sync to the cloud."
    },
    {
        id: "item-3",
        question: "Are there any long-term contracts or hidden fees?",
        answer: "No. We believe in earning your business every month. Our plans are month-to-month with no cancellation fees. You pay one flat transaction rate, and there are never any hidden 'maintenance' or 'setup' charges."
    },
    {
        id: "item-4",
        question: "Can I sync my physical store with my online shop?",
        answer: "Absolutely. Our POS is built for omnichannel retail. Your inventory, customer profiles, and sales data are shared in real-time between your brick-and-mortar location and your e-commerce storefront."
    },
    {
        id: "item-5",
        question: "How long does it take to get my team trained?",
        answer: "Our interface is designed to be as intuitive as a smartphone. Most staff members can master the basics of ringing up sales and processing returns in less than 15 minutes of training."
    }
]

const Faq = () => {

    return (
        <div className='space-y-10 pb-40 bg-background text-foreground'>
            <h4 className="mb-2 uppercase tracking-widest text-center text-primary font-semibold text-sm">Faq</h4>
            <h1 className="text-4xl md:text-5xl text-center font-[petrovFont]">
                Frequently asked questions
            </h1>
            <Accordion className="w-full">
                
                {faqData.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border-b border-slate-200 py-2">
                        <AccordionTrigger className="text-base hover:no-underline hover:text-primary transition-colors text-left">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed text-base pb-4">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Faq