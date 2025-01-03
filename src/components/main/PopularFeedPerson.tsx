import { Flex, Typography } from 'antd';

import FeedList from '@component/common/FeedList';
import { PostDto } from '@type/post/post';

interface Props {
  post: PostDto;
  rank: number;
}

const PopularFeedPerson = ({ post, rank }: Props) => {
  const { UserId, Records, Comments, comment_count, Rating, SelfRating } = post;

  console.log(post);
  return (
    <Flex gap={8} vertical>
      <Flex align='center' gap={8}>
        <Typography.Title level={4}>{rank}</Typography.Title>
        <Typography.Title level={5}>{UserId.Nickname}</Typography.Title>
      </Flex>
      <FeedList
        postId={post._id}
        records={Records}
        ratings={{ value: Rating, count: comment_count }}
        selfRating={SelfRating}
        comments={Comments}
      />
    </Flex>
  );
};

export default PopularFeedPerson;
