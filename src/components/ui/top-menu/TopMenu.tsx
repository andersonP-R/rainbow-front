"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  IoCartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { MenuButton } from "./MenuButton";
import { useCartStore } from "@/store/cart/cart-store";

export const TopMenu = () => {
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <nav className="flex px-5 justify-between items-center w-full h-16 ">
      <div>
        <Link
          href={"/"}
          className="text-black text-sm md:text-3xl font-extrabold"
        >
          RAINBOW <strong className="text-orange-500">CLOTHES</strong>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/"
          // prefetch={false}
        >
          Inicio
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/products"
        >
          Productos
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/about"
        >
          Acerca de Rainbow
        </Link>
      </div>

      <div className="flex items-center">
        <Link
          href={totalItemsInCart === 0 && loaded ? "/empty" : "/cart"}
          className="mx-2"
        >
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <Link href="/profile" className="mx-2">
          <IoPersonOutline className="w-5 h-5" />
        </Link>

        {/* <MenuButton /> */}
        <MenuButton />
      </div>
    </nav>
  );
};
