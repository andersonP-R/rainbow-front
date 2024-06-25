export const getUser = async (token: string) => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/session/${token}`
    );

    const user = await data.json();

    return user;
  } catch (error) {
    console.log("Server Error", error);
  }
};
