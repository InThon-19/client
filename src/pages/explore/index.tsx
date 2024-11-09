import { Flex, Typography } from 'antd';
import { useAtom } from 'jotai';

import { userAtom } from '@/lib/jotai/user';
import FeedList from '@component/common/FeedList';
import { useQuery } from '@hook/react-query/useQuery';
import { PostDto } from '@type/post/post';

const ExplorePage = () => {
  const [user] = useAtom(userAtom);

  const { data } = useQuery<PostDto[]>({
    queryKey: ['/api/post/feed'],
    options: { enabled: false },
  });

  return (
    <Flex gap={20} className='px-2' vertical>
      {data?.map((item) => (
        <Flex key={item._id} gap={8} vertical>
          <Typography.Title level={5}>UserName</Typography.Title>
          <FeedList
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
