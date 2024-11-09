import { HeartFilled, StarFilled } from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import Image from 'next/image';

import FeedList from '@component/common/FeedList';
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
      <FeedList images={feed.images} ratings={feed.ratings} />
    </Flex>
  );
};

export default PopularFeedPerson;
