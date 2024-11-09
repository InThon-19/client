import { client } from '.';

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const result = await client.post<{ url: string; message: string }>(
      '/api/img',
      { file: formData },
      { headers: { 'Content-Type': 'multipart/form-data' } },
    );

    return result.data.url;
  } catch (error) {
    console.error(error);
  }
};
