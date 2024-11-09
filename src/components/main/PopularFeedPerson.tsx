import { Flex, Typography } from 'antd';

import FeedList from '@component/common/FeedList';
import { PostDto } from '@type/post/post';

interface Props {
  oscar: PostDto;
  rank: number;
}

const PopularFeedPerson = ({ oscar, rank }: Props) => {
  const { Records } = oscar;

  return (
    <Flex gap={8} vertical>
      <Flex align='center' gap={8}>
        <Typography.Title level={4}>{rank}</Typography.Title>
        <Typography.Title level={5}>{feed.username}</Typography.Title>
      </Flex>
      <FeedList images={feed.images} ratings={feed.ratings} />
    </Flex>
  );
};

export default PopularFeedPerson;
