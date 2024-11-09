import { client } from '.';

export const writePost = async (query: any, data: any) => {
  try {
    const queryString = new URLSearchParams(query).toString();
    const uri = '/api/record?' + queryString;
    await client.post(uri, { data });
  } catch (error) {
    console.error(error);
  }
};
