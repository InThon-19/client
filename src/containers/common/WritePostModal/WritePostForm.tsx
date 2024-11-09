import { FileImageOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Rate } from 'antd';
import { Dayjs } from 'dayjs';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { userAtom } from '@/lib/jotai/user';
import { postFormValues, PostFormValues } from '@type/zod/form/post';
import { uploadImage } from '@util/api/file';
import { writePost } from '@util/api/post';

type FormValues = Omit<PostFormValues, 'Date'> & { Date: Dayjs };

const WritePostForm = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);
  const [image, setImage] = useState<File | undefined>();
  const [rating, setRating] = useState<number>(5);

  const onFinish = async (formValues: FormValues) => {
    try {
      if (!image) throw new Error();
      const imageUrl = await uploadImage(image);
      const values = postFormValues.parse({ ...formValues, SelfRating: rating, Date: formValues.Date.toDate() });
      const date = values.Date;

      await writePost(
        { user_id: user?.uid, year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDay() },
        { ...values, Image: imageUrl, Date: date.toISOString() },
      );

      router.reload();
    } catch (error) {
      alert('모든 값을 입력해 주세요.');
      console.error(error);
    }
  };

  return (
    <Form onFinish={onFinish} labelCol={{ span: 6 }} className='mt-4' layout='inline'>
      <div className='w-full h-[70vh] overflow-auto mt-[40px] no-scrollbar'>
        <div className='relative w-full max-h-[200px] h-full'>
          {!image ? (
            <>
              <label htmlFor='upload-image' className='flex justify-center items-center w-full h-[200px] bg-gray-200'>
                <FileImageOutlined className='text-4xl' />
              </label>
              <input
                type='file'
                id='upload-image'
                accept='image/*'
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setImage(file);
                  e.target.value = '';
                }}
              />
            </>
          ) : (
            <Image src={URL.createObjectURL(image)} alt='업로드된 이미지' fill style={{ objectFit: 'contain' }} />
          )}
        </div>
        <Form.Item label='누가' name='Who' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='언제' name='When' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='어디서' name='Where' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='무엇을' name='What' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='어떻게' name='How' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='왜' name='Why' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='날짜 선택' name='Date' className='w-full'>
          <DatePicker />
        </Form.Item>
        <Form.Item label='평점' className='w-full'>
          <Rate value={rating} onChange={(value) => setRating(value)} allowClear={false} allowHalf />
        </Form.Item>
        <Button type='primary' htmlType='submit' size='large' className='w-full'>
          작성하기
        </Button>
      </div>
    </Form>
  );
};

export default WritePostForm;
