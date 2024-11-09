import { client } from '.';

export const writePost = async (query: any, data: any) => {
  try {
    const queryString = new URLSearchParams(query).toString();
    const uri = '/record?' + queryString;
    const result = await client.post(uri, data);

    return result;
  } catch (error) {
    console.error(error);
  }
};
