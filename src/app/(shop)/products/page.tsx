import { ProductGrid } from "@/components";
import { initialData } from "@/seed/seed-data";
// import axios from "axios";

export default function ProductsPage() {
  const result = initialData.products;

  const products = result;

  return (
    <section className="p-2">
      <ProductGrid products={products} />
    </section>
  );
}
