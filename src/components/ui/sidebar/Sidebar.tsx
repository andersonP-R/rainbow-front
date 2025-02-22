"use client";
import { useUIStore } from "@/store";
import Cookies from "js-cookie";

import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonAddOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const session = Cookies.get("session");
  let user = {
    name: "",
    email: "",
    role: "",
  };
  if (session) {
    user = JSON.parse(session);
  }

  const signOutSession = () => {
    Cookies.remove("access_token");
    Cookies.remove("session");
    window.location.reload();
    closeMenu();
  };

  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* side menu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute z-10 right-1 top-2 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* menu */}
        {user.name && (
          <>
            <Link
              href="/profile"
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPersonOutline size={30} />
              <span className="ml-3 text-xl">Perfil</span>
            </Link>

            <Link
              href="/products"
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Productos</span>
            </Link>
          </>
        )}

        {!user.name && (
          <>
            <Link
              href="/auth/login"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoLogInOutline size={30} />
              <span className="ml-3 text-xl">Ingresar</span>
            </Link>

            <Link
              href="/auth/register"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPersonAddOutline size={30} />
              <span className="ml-3 text-xl">Crear cuenta</span>
            </Link>
          </>
        )}

        {user.name && (
          <button
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={signOutSession}
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Salir</span>
          </button>
        )}

        <div className="w-full h-px bg-gray-200 my-10" />

        {user.role === "admin" && (
          <>
            <Link
              href="/"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
              onClick={() => closeMenu()}
            >
              <IoShirtOutline size={30} />
              <span className="ml-3 text-xl">Productos</span>
            </Link>

            <Link
              href="/"
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Ordenes</span>
            </Link>

            <Link
              href="/"
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPeopleOutline size={30} />
              <span className="ml-3 text-xl">Usuarios</span>
            </Link>
          </>
        )}
        <div className="flex justify-center w-full text-black text-sm md:text-3xl font-extrabold">
          RAINBOW <strong className="text-orange-500">CLOTHES</strong>
        </div>
      </nav>
    </div>
  );
};
