import { HeartFilled, StarFilled } from '@ant-design/icons';
import { Flex, Typography } from 'antd';
import Image from 'next/image';

import { useQuery } from '@hook/react-query/useQuery';

const SAMPLE_IMAGE_URL =
  'https://e7.pngegg.com/pngimages/97/276/png-clipart-pokemon-eevee-illustration-pokemon-go-pokemon-x-and-y-pikachu-eevee-pokemon-mammal-vertebrate-thumbnail.png';

const PopularFeedContainer = () => {
  const { data } = useQuery({
    queryKey: ['/'],
    options: {
      enabled: false,
    },
  });

  const mockData = [
    {
      rank: 1,
      username: 'KYUMIN',
      rate: { value: 4.8, count: 190 },
      selfRate: 5.0,
      feeds: Array.from({ length: 3 }, () => SAMPLE_IMAGE_URL),
    },
    {
      rank: 2,
      username: 'Seongjin',
      rate: { value: 4.8, count: 190 },
      selfRate: 5.0,
      feeds: Array.from({ length: 4 }, () => SAMPLE_IMAGE_URL),
    },
    {
      rank: 3,
      username: 'Sangjin',
      rate: { value: 4.8, count: 190 },
      selfRate: 5.0,
      feeds: Array.from({ length: 5 }, () => SAMPLE_IMAGE_URL),
    },
    {
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
        {mockData?.map((item) => (
          <Flex key={item.rank} gap={8} vertical>
            <Flex align='center' gap={8}>
              <Typography.Title level={4}>{item.rank}</Typography.Title>
              <Typography.Title level={5}>{item.username}</Typography.Title>
            </Flex>
            <Flex gap={12} className='overflow-scroll no-scrollbar'>
              {item.feeds.map((src, idx) => (
                <Image key={idx} src={src} alt='이미지' width={120} height={120} />
              ))}
            </Flex>
            <Flex justify='space-between' align='center' className='text-xl'>
              <Flex gap={4} align='center'>
                <StarFilled />
                <Typography.Text>{`${item.rate.value} (${item.rate.count})`}</Typography.Text>
              </Flex>
              <div className='relative'>
                <HeartFilled />
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs'>
                  {item.selfRate}
                </p>
              </div>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </div>
  );
};

export default PopularFeedContainer;
