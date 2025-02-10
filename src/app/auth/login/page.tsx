import { titleFont } from "@/config/fonts";
// import { cookies } from "next/headers";
import { LoginForm } from "../ui/LoginForm";
// import { redirect } from "next/navigation";

export default async function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

      <LoginForm />
    </div>
  );
}
