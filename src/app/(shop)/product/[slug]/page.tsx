export const revalidate = 604800; //7 días

import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";

import { AddToCart } from "./ui/AddToCart";
import { ProductMobileSlideshow } from "@/components/products/ProductMobileSlideShow";
import { ProductDesktopSlideshow } from "@/components/products/ProductDesktopSlideShow";
import axios from "axios";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductBySlugPage({ params }: Props) {
  const { slug } = params;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`
  );
  const product = await res.data;

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductDesktopSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <span className="">Stock: {product.inStock}</span>
        <p className="text-lg mb-5">${product.price}</p>

        <AddToCart product={product} />

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
