import { ProductGrid, Title } from "@/components";
import axios from "axios";

export default async function ProductsPage() {
  const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await result.data;
  return (
    <section className="p-2">
      <ProductGrid products={products} />
    </section>
  );
}
