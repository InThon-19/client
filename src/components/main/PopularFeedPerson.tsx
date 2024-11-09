import { HeartFilled, StarFilled } from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import Image from 'next/image';

import { PopularFeed } from '@type/main/item';

interface Props {
  feed: PopularFeed;
}

const PopularFeedPerson = ({ feed }: Props) => {
  return (
    <Flex key={feed.rank} gap={8} vertical>
      <Flex align='center' gap={8}>
        <Typography.Title level={4}>{feed.rank}</Typography.Title>
        <Typography.Title level={5}>{feed.username}</Typography.Title>
      </Flex>
      <Flex gap={12} className='overflow-scroll no-scrollbar'>
        {feed.feeds.map((src, idx) => (
          <Image key={idx} src={src} alt='이미지' width={120} height={120} />
        ))}
      </Flex>
      <Flex justify='space-between' align='center' className='text-xl'>
        <Flex gap={4} align='center'>
          <StarFilled />
          <Typography.Text>{`${feed.rate.value} (${feed.rate.count})`}</Typography.Text>
        </Flex>
        <div className='relative'>
          <HeartFilled />
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs'>
            {feed.selfRate}
          </p>
        </div>
      </Flex>
    </Flex>
  );
};

export default PopularFeedPerson;
