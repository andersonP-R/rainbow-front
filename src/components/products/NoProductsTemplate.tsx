import { IoInformationCircleOutline } from "react-icons/io5";

export const NoProductsTemplate = () => {
  return (
    <div className="h-[300px] w-screen flex items-center justify-center">
      <h2 className="text-2xl ">No hay productos</h2>
      <IoInformationCircleOutline size={40} />
    </div>
  );
};
