import { Flex, Typography } from 'antd';

import PopularFeedPerson from '@component/main/PopularFeedPerson';
import { PopularFeed } from '@type/main/item';

const SAMPLE_IMAGE_URL =
  'https://e7.pngegg.com/pngimages/97/276/png-clipart-pokemon-eevee-illustration-pokemon-go-pokemon-x-and-y-pikachu-eevee-pokemon-mammal-vertebrate-thumbnail.png';

const PopularFeedContainer = () => {
  const mockData: PopularFeed[] = [
    {
      id: 1,
      rank: 1,
      username: 'KYUMIN',
      rate: { value: 4.8, count: 190 },
      selfRate: 5.0,
      feeds: Array.from({ length: 3 }, () => SAMPLE_IMAGE_URL),
    },
    {
      id: 2,
      rank: 2,
      username: 'Seongjin',
      rate: { value: 4.8, count: 190 },
      selfRate: 5.0,
      feeds: Array.from({ length: 4 }, () => SAMPLE_IMAGE_URL),
    },
    {
      id: 3,
      rank: 3,
      username: 'Sangjin',
      rate: { value: 4.8, count: 190 },
      selfRate: 5.0,
      feeds: Array.from({ length: 5 }, () => SAMPLE_IMAGE_URL),
    },
    {
      id: 4,
      rank: 4,
      username: 'Sanghoon',
      rate: { value: 4.8, count: 190 },
      selfRate: 5.0,
      feeds: Array.from({ length: 6 }, () => SAMPLE_IMAGE_URL),
    },
  ];

  return (
    <div>
      <Typography.Title level={3} className='ml-2'>
        {"Today's Oscar"}
      </Typography.Title>
      <Flex gap={20} vertical className='px-2'>
        {mockData?.map((feed) => <PopularFeedPerson key={feed.id} feed={feed} />)}
      </Flex>
    </div>
  );
};

export default PopularFeedContainer;
