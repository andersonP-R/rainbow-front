import Link from "next/link";
import { Title } from "@/components";
import { IoCreateOutline } from "react-icons/io5";
import { getSession } from "@/helpers/getSession";

export default async function ProfilePage() {
  const user = await getSession();

  return (
    <div>
      <Title title={"Perfil de usuario"} />
      <div className="flex h-screen">
        <div className="w-[30%]">avatar</div>
        <div className="w-[30%] flex flex-col gap-3">
          <label>Nombre:</label>
          <input
            type="text"
            className="outline-1 p-2 outline"
            disabled
            value={user.name}
          />

          <label>Correo:</label>
          <input
            type="text"
            className="outline-1 p-2 outline"
            disabled
            value={user.email}
          />

          <label>Rol:</label>
          <input
            type="text"
            className="outline-1 p-2 outline"
            disabled
            value={user.role}
          />

          <Link href="/profile/edit" className="flex">
            Editar
            <IoCreateOutline className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
