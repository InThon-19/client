import { Flex, Typography } from 'antd';

import FeedList from '@component/common/FeedList';
import { PostDto } from '@type/post/post';

interface Props {
  post: PostDto;
  rank: number;
}

const PopularFeedPerson = ({ post, rank }: Props) => {
  const { UserId, Records, SelfRating, Comments, Rating, CommentsNum } = post;

  return (
    <Flex gap={8} vertical>
      <Flex align='center' gap={8}>
        <Typography.Title level={4}>{rank}</Typography.Title>
        <Typography.Title level={5}>{UserId}</Typography.Title>
      </Flex>
      <FeedList
        records={Records}
        ratings={{ value: Rating, count: CommentsNum }}
        selfRating={SelfRating}
        comments={Comments}
      />
    </Flex>
  );
};

export default PopularFeedPerson;
