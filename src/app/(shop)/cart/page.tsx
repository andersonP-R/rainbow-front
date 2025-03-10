import Link from "next/link";

import { Title } from "@/components";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";
import { IoCartOutline } from "react-icons/io5";

export default function CartPage() {
  // redirect('/empty');

  return (
    <div className="flex justify-center items-center mb-72 md:px-10 px-4">
      <div className="flex flex-col w-[1000px]">
        <div className="flex gap-2 items-center">
          <Title title="Carrito" />
          <IoCartOutline size={30} className="mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col md:mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link href="/products" className="underline mb-5">
              Continúa comprando
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <OrderSummary />

            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href="/checkout/address"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
