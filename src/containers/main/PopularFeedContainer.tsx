import { Flex, Typography } from 'antd';

import PopularFeedPerson from '@component/main/PopularFeedPerson';
import { useQuery } from '@hook/react-query/useQuery';
import { PostDto } from '@type/post/post';

const PopularFeedContainer = () => {
  const { data } = useQuery<PostDto[]>({ queryKey: ['/api/post/oscar'], options: { enabled: false } });

  return (
    <div>
      <Typography.Title level={3} className='ml-2'>
        {"Today's Oscar"}
      </Typography.Title>
      <Flex gap={20} vertical className='mt-2 px-4'>
        {data?.map((oscar) => <PopularFeedPerson key={oscar._id} oscar={oscar} />)}
      </Flex>
    </div>
  );
};

export default PopularFeedContainer;
