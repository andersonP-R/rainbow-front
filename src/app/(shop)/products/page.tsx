import { ProductGrid, Title } from "@/components";

export default async function ProductsPage() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-cache",
  });
  const products = await result.json();
  return (
    <section className="p-2">
      <ProductGrid products={products} />
    </section>
  );
}
