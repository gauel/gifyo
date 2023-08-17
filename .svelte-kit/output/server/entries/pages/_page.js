import { P as PUBLIC_URL } from "../../chunks/public.js";
const load = async ({ fetch }) => {
  let gifs = [
    {
      id: 1,
      gif: {
        url: "/gif/1.gif"
      }
    },
    {
      id: 2,
      url: "/gif/2.gif"
    }
  ];
  try {
    let url = `${PUBLIC_URL}/api/gifs?populate=*`;
    const response = await fetch(url);
    gifs = (await response.json())?.data || {};
  } catch (ex) {
    console.error("fetch api failed with", ex);
  }
  return {
    gifs,
    PUBLIC_URL
  };
};
export {
  load
};
