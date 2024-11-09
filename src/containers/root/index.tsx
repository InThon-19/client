import ExampleComp from '@component/root/ExampleComp';
import { useQuery } from '@hook/react-query/useQuery';
import { HomePageQuery } from '@type/zod/pages/main';

type ExampleResponse = { result: { test: number[] } };
type ExampleQuery = { page: number; pageSize: number };

interface Props {
  query: HomePageQuery;
}

const RootContainer = ({ query }: Props) => {
  const { data } = useQuery<ExampleResponse, ExampleQuery>({
    queryKey: ['/api', query],
    options: { enabled: false },
  });
  return <ExampleComp />;
};

export default RootContainer;
