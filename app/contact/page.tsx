import ContactForm from "@/components/contact-form";
import { ContactInfoCard } from "@/components/contact-info-card";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
    

      {/* Hero Section */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            
            
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in touch with us
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Have a question, feedback, or a project in mind? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form and Contact Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <ContactInfoCard />
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Page;