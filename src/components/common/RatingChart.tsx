import { Flex } from 'antd';
import { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

type ChartData = {
  date: string;
  rate: number;
};

interface Props {
  data: ChartData[];
}

const RatingChart = ({ data }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Flex justify='end'>
      <LineChart data={data} width={440} height={300}>
        <XAxis dataKey='date' />
        <YAxis domain={[0, 5]} orientation='right' allowDecimals />
        <Tooltip />
        <Line type='monotone' dataKey='rate' strokeWidth={3} />
      </LineChart>
    </Flex>
  );
};

export default RatingChart;
