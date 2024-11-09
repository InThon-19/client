import { NextPage } from 'next';

import NavigationBar from '@component/common/NavigationBar';
import RatingChart from '@component/common/RatingChart';

const mockData = [
  { date: '7일', rate: 3.2 },
  { date: '8일', rate: 2.8 },
  { date: '9일', rate: 5.0 },
  { date: '10일', rate: 4.0 },
  { date: '11일', rate: 4.5 },
  { date: '12일', rate: 2.1 },
  { date: '13일', rate: 1.2 },
];

const PageRoot: NextPage = () => {
  return (
    <div>
      <RatingChart data={mockData} />
      <NavigationBar />
    </div>
  );
};

export default PageRoot;
