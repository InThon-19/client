import type { NextPage } from 'next';

import RatingChart from '@component/common/RatingChart';
import PopularFeedContainer from '@container/main/PopularFeedContainer';

const PageRoot: NextPage = () => {
  return (
    <div>
      <RatingChart />
      <PopularFeedContainer />
    </div>
  );
};

export default PageRoot;
