import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Calendar, Divider, Flex, Select, Typography } from 'antd';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';

import WithAuth from '@/lib/hoc/WithAuth';
import FeedList from '@component/common/FeedList';

const SAMPLE_IMAGE =
  'data:image/jpeg;base64,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';

const mockData = [
  { date: '2024-11-08', images: Array.from({ length: 5 }, () => SAMPLE_IMAGE) },
  { date: '2024-11-07', images: Array.from({ length: 6 }, () => SAMPLE_IMAGE) },
  { date: '2024-11-06', images: Array.from({ length: 8 }, () => SAMPLE_IMAGE) },
  { date: '2024-11-05', images: Array.from({ length: 10 }, () => SAMPLE_IMAGE) },
];

const MyCalendarPage: NextPage = () => {
  const router = useRouter();
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  return (
    <Flex className='h-[calc(100vh-100px)] overflow-y-auto' vertical>
      <div className='relative min-h-[40px]'>
        {isCalendarVisible ? (
          <>
            <Calendar
              onSelect={(date, info) => {
                if (info.source !== 'date') return;
                window.scrollTo(0, 0);
                router.replace({ hash: date.format('YYYY-MM-DD') }, undefined, { scroll: true });
              }}
              fullscreen={false}
              headerRender={({ value, onChange }) => {
                const start = 0;
                const end = 12;
                const monthOptions = [];

                let current = value.clone();
                const months = [];
                for (let i = start; i < end; i++) {
                  current = current.month(i);
                  months.push(`${current.month() + 1}월`);
                }

                for (let i = start; i < end; i++) {
                  monthOptions.push(
                    <Select.Option key={i} value={i} className='month-item'>
                      {months[i]}
                    </Select.Option>,
                  );
                }

                const year = value.year();
                const month = value.month();
                const options = [];
                for (let i = year - 10; i < year + 10; i += 1) {
                  options.push(
                    <Select.Option key={i} value={i} className='year-item'>
                      {i}
                    </Select.Option>,
                  );
                }

                return (
                  <Flex justify='space-between' align='center' className='px-2 text-lg mb-2'>
                    <UpOutlined onClick={() => setIsCalendarVisible(false)} />
                    <Flex gap={4}>
                      <Select
                        size='small'
                        popupMatchSelectWidth={false}
                        className='my-year-select'
                        value={year}
                        onChange={(newYear) => {
                          const now = value.clone().year(newYear);
                          onChange(now);
                        }}>
                        {options}
                      </Select>
                      <Select
                        size='small'
                        popupMatchSelectWidth={false}
                        value={month}
                        onChange={(newMonth) => {
                          const now = value.clone().month(newMonth);
                          onChange(now);
                        }}>
                        {monthOptions}
                      </Select>
                    </Flex>
                  </Flex>
                );
              }}
            />
          </>
        ) : (
          <DownOutlined className='text-lg px-2' onClick={() => setIsCalendarVisible(true)} />
        )}
      </div>
      <Flex gap={12} vertical className='flex-1 overflow-y-auto scroll-smooth no-scrollbar'>
        {mockData.map((item) => (
          <Fragment key={item.date}>
            <Divider />
            <Flex gap={8} className='px-1' id={item.date} vertical>
              <Typography.Title level={5}>{item.date}</Typography.Title>
              <FeedList images={item.images} ratings={{ value: 3.2, count: 200, self: 1.2 }} />
            </Flex>
          </Fragment>
        ))}
      </Flex>
    </Flex>
  );
};

export default WithAuth(MyCalendarPage);
