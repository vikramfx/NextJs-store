import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Truck, RefreshCw } from "lucide-react";

export default function ReturnsPage() {
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
          <RefreshCw className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-bold">Returns & Refunds</h1>
          <p className="mt-2 text-muted-foreground">
            We want you to be completely satisfied with your purchase. Learn about
            our hassle-free return process.
          </p>
        </div>

        <div className="grid gap-8">
          <section className="rounded-lg border bg-card p-6">
            <h2 className="flex items-center text-2xl font-semibold">
              <Package className="mr-2 h-6 w-6" />
              Return Policy
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                We accept returns within 30 days of delivery for most items in
                their original condition and packaging. Some exceptions apply:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Items must be unused and in their original packaging</li>
                <li>All tags and labels must be attached</li>
                <li>Items must not show signs of wear or damage</li>
                <li>
                  Certain items like intimate apparel or customized products cannot
                  be returned
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-lg border bg-card p-6">
            <h2 className="flex items-center text-2xl font-semibold">
              <Truck className="mr-2 h-6 w-6" />
              Return Process
            </h2>
            <div className="mt-4 space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4 text-center">
                  <div className="text-xl font-bold">Step 1</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Initiate your return through your account or contact support
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="text-xl font-bold">Step 2</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Pack the item securely with all original materials
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="text-xl font-bold">Step 3</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Ship the item back using our prepaid label
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold">Refund Information</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Once we receive and inspect your return, we'll process your refund
                within 3-5 business days. The refund will be issued to your
                original payment method.
              </p>
              <p>
                Please note that shipping costs are non-refundable unless the item
                arrived damaged or incorrect.
              </p>
            </div>
          </section>

          <div className="mt-8 text-center">
            <p className="mb-4 text-muted-foreground">
              Need help with your return? Our customer service team is here to
              assist you.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}