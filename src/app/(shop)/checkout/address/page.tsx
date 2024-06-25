import { Title } from "@/components";

import { AddressForm } from "./ui/AddressForm";

export default async function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <AddressForm countries={[]} />
      </div>
    </div>
  );
}