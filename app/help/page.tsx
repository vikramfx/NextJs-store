import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  HelpCircle,
  Package,
  CreditCard,
  Truck,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

export default function HelpPage() {
  const faqs = [
    {
      category: "Orders & Shipping",
      icon: Package,
      questions: [
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.",
        },
        {
          q: "What shipping methods are available?",
          a: "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and next-day delivery for select areas.",
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to over 50 countries worldwide. Shipping times and costs vary by location.",
        },
      ],
    },
    {
      category: "Payment & Pricing",
      icon: CreditCard,
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, and Apple Pay. All transactions are secure and encrypted.",
        },
        {
          q: "When will I be charged?",
          a: "Your card will be charged when you place your order. For pre-orders, you'll be charged when the item ships.",
        },
        {
          q: "Do you offer price matching?",
          a: "Yes, we offer price matching for identical items from authorized retailers. Contact our support team for details.",
        },
      ],
    },
    {
      category: "Returns & Refunds",
      icon: RefreshCw,
      questions: [
        {
          q: "What is your return policy?",
          a: "We accept returns within 30 days of delivery. Items must be unused and in original packaging.",
        },
        {
          q: "How do I start a return?",
          a: "Log into your account, find the order, and click 'Return Items'. You'll receive a prepaid shipping label via email.",
        },
        {
          q: "When will I receive my refund?",
          a: "Refunds are processed within 3-5 business days after we receive your return. It may take additional time to appear on your statement.",
        },
      ],
    },
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-12 text-center">
          <HelpCircle className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-bold">Help Center</h1>
          <p className="mt-2 text-muted-foreground">
            Find answers to frequently asked questions and get support
          </p>
        </div>

        <div className="grid gap-8">
          {faqs.map((category) => (
            <section key={category.category} className="rounded-lg border bg-card p-6">
              <h2 className="flex items-center text-2xl font-semibold">
                <category.icon className="mr-2 h-6 w-6" />
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="mt-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-card p-8 text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-2xl font-semibold">Still Need Help?</h2>
          <p className="mt-2 text-muted-foreground">
            Our customer support team is available 24/7 to assist you with any
            questions or concerns.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/returns">Returns Info</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}