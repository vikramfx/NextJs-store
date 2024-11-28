"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product.id);
    toast({
      title: "Added to Cart",
      description: "Item has been added to your cart",
    });
  };

  return (
    <div className="group rounded-lg bg-background p-4 transition-shadow hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-lg bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="mt-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button variant="secondary" size="sm" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}