import { FileImageOutlined } from '@ant-design/icons';
import { Button, Form, Input, Rate } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const WritePostForm = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [form] = Form.useForm();

  return (
    <div className='w-full h-[70vh] overflow-auto mt-[40px]'>
      <div className='relative w-full max-h-[200px] h-full'>
        {!uploadedImage ? (
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

                setUploadedImage(file);
                e.target.value = '';
              }}
            />
          </>
        ) : (
          <Image src={URL.createObjectURL(uploadedImage)} alt='업로드된 이미지' fill style={{ objectFit: 'contain' }} />
        )}
      </div>
      <Form form={form} labelCol={{ span: 6 }} className='mt-4' layout='inline'>
        <Form.Item label='누가' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='언제' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='어디서' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='무엇을' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='어떻게' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='왜' className='w-full'>
          <Input />
        </Form.Item>
        <Form.Item label='평점' className='w-full'>
          <Rate
            defaultValue={5}
            value={form.getFieldValue('rating')}
            onChange={(value) => {
              form.setFieldValue('rating', value);
            }}
            allowClear={false}
            allowHalf
          />
        </Form.Item>
        <Button type='primary' htmlType='submit' size='large' className='w-full'>
          작성하기
        </Button>
      </Form>
    </div>
  );
};

export default WritePostForm;
