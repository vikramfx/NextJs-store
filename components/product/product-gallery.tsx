type ProductGalleryProps = {
  product: {
    image: string;
    name: string;
  };
};

export function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="aspect-square overflow-hidden rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover"
      />
    </div>
  );
}