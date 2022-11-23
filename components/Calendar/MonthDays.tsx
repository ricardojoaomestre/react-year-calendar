import * as React from 'react';
import { Grid, theme } from '@chakra-ui/react';
import Day from './Day';

interface MonthDaysProps {
  total: number;
  startsAt?: number;
  onClick: (...args: any) => any;
}

const MonthDays = ({
  total,
  startsAt,
  onClick,
  ...otherProps
}: MonthDaysProps) => (
  <Grid
    templateColumns={`repeat(7, minmax(20px, 1fr))`}
    gap={1}
    {...otherProps}
  >
    {[...Array(total)].map((_$, idx) =>
      idx === 0 ? (
        <Day
          key={idx}
          day={idx + 1}
          onClick={() => onClick(idx + 1)}
          gridColumn={startsAt}
        />
      ) : (
        <Day key={idx} day={idx + 1} onClick={() => onClick(idx + 1)} />
      )
    )}
  </Grid>
);

export default MonthDays;
