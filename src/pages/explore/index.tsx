import { Flex, Typography } from 'antd';

import FeedList from '@component/common/FeedList';
import { useQuery } from '@hook/react-query/useQuery';
import { PostDto } from '@type/post/post';

type Dto = Omit<PostDto, 'UserId'> & {
  UserId: {
    _id: string;
    UserId: string;
    ProfileImage: string;
    Nickname: string;
    Email: string;
  };
};

const ExplorePage = () => {
  const { data } = useQuery<{ data: { data: Dto[] } }>({
    queryKey: ['/post/feed'],
  });

  return (
    <Flex gap={20} className='px-2' vertical>
      {data?.data.data.map((item) => (
        <Flex key={item._id} gap={8} vertical>
          <Typography.Title level={5}>{item.UserId.Nickname}</Typography.Title>
          <FeedList
            postId={item._id}
            records={item.Records}
            ratings={{
              value: item.Rating,
              count: item.CommentsNum,
            }}
            selfRating={item.SelfRating}
            comments={item.Comments}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default ExplorePage;
