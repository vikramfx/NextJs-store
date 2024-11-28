import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product/product-card";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex min-h-[600px] flex-col items-center justify-center text-center">
          <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')] bg-cover bg-center bg-no-repeat opacity-20" />
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Discover Our Latest Collection
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Shop the latest trends and discover amazing deals on our collection of
            premium products.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/shop">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Electronics",
                image:
                  "https://images.unsplash.com/photo-1498049794561-7780e7231661",
              },
              {
                name: "Fashion",
                image:
                  "https://images.unsplash.com/photo-1445205170230-053b83016050",
              },
              {
                name: "Home & Living",
                image:
                  "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
              },
              {
                name: "Sports",
                image:
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
              },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/shop/category/${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}