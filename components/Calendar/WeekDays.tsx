import * as React from 'react';
import Skeleton from '../Skeleton';
import dayjs from '../../dayjs';
import { Grid, Center, theme } from '@chakra-ui/react';

const WeekDays = (props) => {
  const weekdays = dayjs.weekdaysMin();
  return (
    <Grid
      templateColumns={`repeat(${weekdays.length}, minmax(20px, 1fr))`}
      gap={1}
      {...props}
    >
      {weekdays.map((weekday, idx) => (
        <Skeleton size={18} key={idx}>
          <Center fontSize={theme.fontSizes['xs']} fontWeight="semibold">
            {weekday}
          </Center>
        </Skeleton>
      ))}
    </Grid>
  );
};

export default WeekDays;
