export const revalidate = 604800; //7 días

import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";

import { AddToCart } from "./ui/AddToCart";
import { ProductMobileSlideshow } from "@/components/products/ProductMobileSlideShow";
import { ProductDesktopSlideshow } from "@/components/products/ProductDesktopSlideShow";
// import axios from "axios";
import { initialData } from "@/seed/seed-data";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductBySlugPage({ params }: Props) {
  const { slug } = params;
  // const res = await axios.get(
  //   `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`
  // );
  const product = initialData.products.filter((e) => e.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product[0].title}
          images={product[0].images}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductDesktopSlideshow
          title={product[0].title}
          images={product[0].images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {product[0].title}
        </h1>

        <span className="">Stock: {product[0].inStock}</span>
        <p className="text-lg mb-5">${product[0].price}</p>

        <AddToCart product={product[0]} />

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product[0].description}</p>
      </div>
    </div>
  );
}
