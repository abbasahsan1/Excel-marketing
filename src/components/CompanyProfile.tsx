import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CompanyProfile = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Company Profile
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about our leadership and the team behind our success
          </p>
        </div>

        {/* CEO Profile */}
        <Card className="mb-12 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              {/* Placeholder for CEO image */}
              <div className="h-72 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">CEO Photo Coming Soon</span>
              </div>
            </div>
            <CardContent className="md:w-2/3 p-8">
              <Badge className="mb-4 bg-luxury-gold text-foreground">CEO</Badge>
              <h3 className="text-2xl font-bold mb-4">Waheed ur Rehman Farooqui</h3>
              <div className="prose text-muted-foreground">
                <p className="mb-4">
                  Details about CEO's vision and leadership will be added soon.
                </p>
                <p>
                  Message from the CEO coming soon.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Other Officials */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Other Officials</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="leadership">
              <AccordionTrigger>Leadership Team</AccordionTrigger>
              <AccordionContent>
                <div className="text-muted-foreground py-4">
                  Details Coming Soon
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="directors">
              <AccordionTrigger>Board of Directors</AccordionTrigger>
              <AccordionContent>
                <div className="text-muted-foreground py-4">
                  Details Coming Soon
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="management">
              <AccordionTrigger>Management Team</AccordionTrigger>
              <AccordionContent>
                <div className="text-muted-foreground py-4">
                  Details Coming Soon
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
