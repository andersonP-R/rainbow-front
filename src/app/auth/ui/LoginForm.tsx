"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useUIStore } from "@/store";

type FormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const path = usePathname();
  const [pathTo, setPathTo] = useState("");

  useEffect(() => {
    if (path === "/auth/login") {
      setPathTo("/products");
    } else {
      setPathTo(path);
    }
  }, [path]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    const { email, password } = data;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const serverResponse = await res.json();
      const { token, user, message } = serverResponse;

      if (!user) {
        setError(message);
        return;
      }

      Cookies.set("access_token", token);
      Cookies.set("session", JSON.stringify(user));
      closeMenu();
      router.push(pathTo);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col">
      {error && <span className="text-red-500"> {error} </span>}
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        autoFocus
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        {...register("password", { required: true, minLength: 4 })}
      />

      <button className="btn-primary">Ingresar</button>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/register" className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};
