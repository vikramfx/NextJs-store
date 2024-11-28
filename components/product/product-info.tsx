"use client";

import { Button } from "@/components/ui/button";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react";

type ProductInfoProps = {
  product: {
    name: string;
    category: string;
    rating: number;
    description: string;
    price: number;
  };
  quantity: number;
  setQuantity: (quantity: number) => void;
  onAddToCart: () => void;
};

export function ProductInfo({ 
  product,
  quantity,
  setQuantity,
  onAddToCart
}: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-muted-foreground">{product.category}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating)
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>
        <span className="text-muted-foreground">({product.rating})</span>
      </div>

      <p className="text-lg">{product.description}</p>

      <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center text-lg">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button className="flex-1" onClick={onAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}