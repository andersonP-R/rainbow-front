"use client";

import { IoSearchOutline } from "react-icons/io5";
import { Product } from "../../interfaces/Product";
import { ProductGridItem } from "./ProductGridItem";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { searchHandler } from "@/actions";
import { NoProductsTemplate } from "./NoProductsTemplate";

interface Props {
  products: Product[];
}

interface FormFields {
  price: number;
  type: string;
  gender: string;
}

export const ProductGrid = ({ products }: Props) => {
  const { register, handleSubmit, watch } = useForm<FormFields>();
  const [productsState, setProductsState] = useState(products);
  const [state, dispatch] = useFormState(searchHandler, undefined);
  const [term, setTerm] = useState("");

  const priceAmount = watch("price");

  useEffect(() => {
    if (!state) return;
    setProductsState(state);
  }, [state]);

  const onSubmit = async (data: FormFields) => {
    try {
      if (data.type === "all" && data.gender !== "all") {
        const { type, ...rest } = data;
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/search`,
          {
            params: rest,
          }
        );

        const products = await response.data;
        return setProductsState(products);
      }

      if (data.type !== "all" && data.gender === "all") {
        const { gender, ...rest } = data;
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/search`,
          {
            params: rest,
          }
        );

        const products = await response.data;
        return setProductsState(products);
      }

      if (data.type === "all" && data.gender === "all") {
        const { gender, type, ...rest } = data;
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/search`,
          {
            params: rest,
          }
        );

        const products = await response.data;
        return setProductsState(products);
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/search`,
        {
          params: data,
        }
      );

      const products = await response.data;
      setProductsState(products);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2 m-4 items-center md:flex-row">
        <form
          action={dispatch}
          className="flex relative border-2 border-gray-400 rounded"
        >
          <input
            type="text"
            placeholder="buscar"
            className="px-3 outline-none"
            name="term"
          />
          <button
            type="submit"
            className="p-3 w-max rounded-r-sm hover:bg-gray-500 hover:text-white transition-all"
          >
            <IoSearchOutline size={20} />
          </button>
        </form>

        <div className="border-2 flex p-2 rounded border-gray-400 relative items-center">
          <span className="border-r-2 border-gray-400 pr-2">
            Busqueda avanzada
          </span>
          <form className="ml-2" onSubmit={handleSubmit(onSubmit)}>
            <label className="mr-1">Tipo</label>
            <select className="border-2 border-gray-400" {...register("type")}>
              <option value="all">Todos</option>

              <option value="shirts">Shirts</option>
              <option value="hoodies">Hoodies</option>
              <option value="hats">Hats</option>
            </select>

            <label className="ml-2 mr-1">Genero</label>
            <select
              className="border-2 border-gray-400 mr-2"
              {...register("gender")}
            >
              <option value="all">Todos</option>

              <option value="men">Hombres</option>
              <option value="women">Mujeres</option>
              <option value="kid">Niños</option>
              <option value="unisex">Unisex</option>
            </select>

            <label className="ml-2 mr-1 ">Precio: ${priceAmount}</label>
            <input
              className="mr-1 "
              type="range"
              defaultValue={20}
              min="20"
              max="225"
              step={5}
              {...register("price")}
            />

            <button
              className="px-2 rounded-md border-2 border-gray-400 transition-all hover:bg-gray-100"
              type="submit"
            >
              filtrar
            </button>
          </form>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {productsState.length === 0 && <NoProductsTemplate />}
        {productsState.map((product) => (
          <ProductGridItem key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};
