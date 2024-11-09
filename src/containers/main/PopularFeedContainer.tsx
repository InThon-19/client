import { Flex, Typography } from 'antd';

import PopularFeedPerson from '@component/main/PopularFeedPerson';
import { useQuery } from '@hook/react-query/useQuery';
import { PostDto } from '@type/post/post';

const PopularFeedContainer = () => {
  const { data } = useQuery<{ data: { data: PostDto[] } }>({ queryKey: ['/post/oscar'] });

  console.log(data);

  return (
    <div>
      <Typography.Title level={3} className='ml-2'>
        {"Today's Oscar"}
      </Typography.Title>
      <Flex gap={20} vertical className='mt-2 px-4'>
        {data?.data.data.map((post, idx) => <PopularFeedPerson key={post.UserId} post={post} rank={idx + 1} />)}
      </Flex>
    </div>
  );
};

export default PopularFeedContainer;
