import { cookies } from "next/headers";

export const getSession = () => {
  const cookieStore = cookies();
  const session = cookieStore.get("session")?.value;
  const user = JSON.parse(session!);
  return user;
};
