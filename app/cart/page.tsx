"use client";

import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const cartItems = items.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.id)!,
  }));

  if (items.length === 0) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <p className="mt-4 text-muted-foreground">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Button asChild className="mt-8">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-4">
          {cartItems.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 rounded-lg border bg-card p-4"
            >
              <div className="aspect-square h-24 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(product.id, Math.max(1, quantity - 1))
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-right font-semibold">
                ${(product.price * quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between border-b pb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-xl font-bold">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <Button className="mt-6 w-full" size="lg" asChild>
              <Link href="/checkout">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}