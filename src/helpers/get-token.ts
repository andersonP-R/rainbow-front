import { cookies } from "next/headers";

export const getClientToken = (): string | undefined => {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  return token?.value;
};
