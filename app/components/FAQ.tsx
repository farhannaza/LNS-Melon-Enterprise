import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqItems = [
    {
      question: "How do you ensure the quality of your melons?",
      answer: "We carefully select our melons at the peak of ripeness and use sustainable farming practices to ensure the highest quality. Each melon is inspected before shipping to guarantee freshness."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we offer delivery services to local areas. For locations further away, we partner with reliable shipping companies to ensure your melons arrive fresh and undamaged."
    },
    {
      question: "What types of melons do you offer?",
      answer: "We offer a variety of melons including honeydew, watermelon, cantaloupe, and seasonal specialty melons. Our selection may vary based on the time of year to ensure we're always offering the freshest produce."
    },
    {
      question: "How should I store my melons?",
      answer: "For optimal freshness, store uncut melons at room temperature for up to a week. Once cut, store the melon in an airtight container in the refrigerator and consume within 3-5 days."
    },
    {
      question: "Do you offer bulk ordering for events or businesses?",
      answer: "We offer bulk ordering options for events, restaurants, and other businesses. Please contact us directly for more information on our wholesale prices and delivery options."
    }
  ];
  
  export default function FAQ() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }
  