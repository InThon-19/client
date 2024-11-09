import { client } from '.';

export const postComment = async (postId: string, data: any) => {
  const url = `/comment?post_id=${postId}`;
  const result = await client.post(url, data);

  return result.data;
};
