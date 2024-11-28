import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-12 text-center">
          <Shield className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">
            Your privacy is important to us. Learn how we collect, use, and protect
            your data.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, including name,
              email address, shipping address, payment information, and any other
              information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Process your orders and transactions</li>
              <li>Send you order confirmations and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and customer service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to third parties. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <p className="text-muted-foreground">
              We implement a variety of security measures to maintain the safety of
              your personal information when you place an order or enter, submit,
              or access your personal information. We use encryption to protect
              sensitive information transmitted online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies to help us remember and process the items in your
              shopping cart, understand and save your preferences for future
              visits, and compile aggregate data about site traffic and site
              interaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, correct, or delete your personal data.
              You can also object to processing of your personal data, request
              data portability, or withdraw consent where you have previously
              provided it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact
              us at privacy@store.com or through our contact page.
            </p>
            <Button asChild className="mt-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}