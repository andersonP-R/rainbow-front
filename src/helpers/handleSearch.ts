import axios from "axios";

export const handleSearch = async (tag: string, gender: string) => {
  if (!gender) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/search`,
      {
        params: {
          tag,
        },
      }
    );

    const products = await response.data;
    return products;
  } else if (!tag) {
  }
};
