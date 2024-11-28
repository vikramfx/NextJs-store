import Link from "next/link";

type RelatedProductsProps = {
  products: Array<{
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
  }>;
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">You Might Also Like</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group rounded-lg border bg-card p-4 transition-shadow hover:shadow-lg"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}