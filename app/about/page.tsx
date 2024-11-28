import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Trophy,
  Truck,
  Headphones,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center bg-no-repeat opacity-20" />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            About Our Store
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            We're dedicated to providing the best shopping experience with quality
            products and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Customer First",
              description:
                "We prioritize our customers' needs and satisfaction above all else.",
            },
            {
              icon: Trophy,
              title: "Quality Products",
              description:
                "We carefully select and verify all products for quality assurance.",
            },
            {
              icon: Truck,
              title: "Fast Delivery",
              description:
                "Quick and reliable shipping to get your products to you faster.",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              description:
                "Our customer support team is always here to help you.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-6 text-center"
            >
              <feature.icon className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2024, our store began with a simple mission: to provide
              high-quality products at competitive prices while maintaining
              exceptional customer service. Over the years, we've grown to become
              one of the most trusted online retailers, serving customers
              worldwide.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe in sustainable business practices and giving back to our
              community. That's why we partner with local organizations and
              maintain eco-friendly operations wherever possible.
            </p>
            <Button asChild className="mt-6">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Our team"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="grid gap-8 rounded-lg border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Happy Customers", value: "10,000+" },
            { label: "Products", value: "1,000+" },
            { label: "Countries", value: "50+" },
            { label: "Team Members", value: "100+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}