import { Flex } from 'antd';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import { userAtom } from '@/lib/jotai/user';
import { useQuery } from '@hook/react-query/useQuery';

const RatingChart = () => {
  const [user] = useAtom(userAtom);
  const [isClient, setIsClient] = useState(false);

  const { data } = useQuery<
    { data: { data: { date: string; self_rating: number; comment_rating: number }[] } },
    { date: 'day'; count: number }
  >({
    queryKey: [`/user/${user?.uid}/rating`, { date: 'day', count: 30 }],
    options: { enabled: isClient && !!user },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div style={{ height: 300 }} />;

  const dataSource = data?.data.data.map((value) => ({
    ...value,
    self_rating: value.self_rating.toFixed(1),
  }));

  return (
    <Flex justify='end'>
      <LineChart data={dataSource} width={440} height={300}>
        <XAxis dataKey='' />
        <YAxis domain={[0, 5]} orientation='right' allowDecimals />
        <Tooltip />
        <Line type='monotone' dataKey='self_rating' strokeWidth={3} />
      </LineChart>
    </Flex>
  );
};

export default RatingChart;
