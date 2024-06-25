"use server";

import { Product } from "@/interfaces/Product";
import axios from "axios";

export async function searchHandler(prevState: Product[], formData: FormData) {
  const { term } = Object.fromEntries(formData);
  try {
    const products = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search/${term}`
    );
    return products.data;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
}
