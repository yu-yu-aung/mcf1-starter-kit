import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfoCard() {
  return (
    <Card className="h-fit sticky top-8">
      <CardHeader>
        <CardTitle className="text-2xl">Contact Information</CardTitle>
        <CardDescription>
          Reach out through any of the following channels.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">Email</span>
          </div>
          <a
            href="mailto:teapos@mail.com"
            className="block text-foreground hover:text-primary transition-colors pl-6"
          >
            teapos@mail.com
          </a>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">Phone</span>
          </div>
          <a
            href="tel:+959123456789"
            className="block text-foreground hover:text-primary transition-colors pl-6"
          >
            +95 9 123 456 789
          </a>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Location</span>
          </div>
          <p className="text-foreground pl-6">Yangon, Myanmar</p>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            Our team is available Monday to Friday
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
