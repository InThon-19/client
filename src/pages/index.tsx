import { NextPage } from 'next';

import RatingChart from '@component/common/RatingChart';
import PopularFeedContainer from '@container/root/PopularFeedContainer';

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
      <PopularFeedContainer />
    </div>
  );
};

export default PageRoot;
