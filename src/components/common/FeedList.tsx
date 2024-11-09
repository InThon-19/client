import { HeartFilled, StarFilled } from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import Image from 'next/image';

import { PopularFeed } from '@type/main/item';

interface Props {
  images: PopularFeed['images'];
  ratings?: PopularFeed['ratings'];
}

const FeedList = ({ images, ratings }: Props) => {
  return (
    <div>
      <Flex gap={12} className='overflow-scroll no-scrollbar'>
        {images.map((src, idx) => (
          <Image key={idx} className='border-2' src={src} alt='이미지' width={120} height={120} />
        ))}
      </Flex>
      {ratings && (
        <Flex justify='space-between' align='center' className='text-xl'>
          <Flex gap={4} align='center'>
            <StarFilled />
            <Typography.Text>{`${ratings?.value} (${ratings?.count})`}</Typography.Text>
          </Flex>
          <div className='relative'>
            <HeartFilled />
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs'>
              {ratings?.self}
            </p>
          </div>
        </Flex>
      )}
    </div>
  );
};

export default FeedList;
