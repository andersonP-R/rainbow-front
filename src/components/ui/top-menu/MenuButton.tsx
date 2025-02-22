"use client";

import { useUIStore } from "@/store";
import { IoMenu } from "react-icons/io5";

export const MenuButton = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <button
      className="px-3 rounded-md transition-all hover:bg-gray-100"
      onClick={() => openMenu()}
    >
      <IoMenu size={30} />
    </button>
  );
};
