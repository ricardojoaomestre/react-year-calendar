import * as React from 'react';
import { Center, Stack, theme } from '@chakra-ui/react';
import dayjs from '../../dayjs';
import WeekDays from './WeekDays';
import MonthDays from './MonthDays';

interface MonthProps {
  year: number;
  month: number;
  onClick: (...args: any) => any;
}

const Month = ({ year, month, onClick }: MonthProps) => {
  const virtualDate = `${year}-${month}-1`;
  const monthName = dayjs.months()[month - 1];
  const totalDays = dayjs(virtualDate).daysInMonth();
  const startsAt = dayjs(virtualDate).weekday();

  function handleDayClick(day) {
    const date = `${year}-${month}-${day}`;
  }
  return (
    <Stack direction="column" gap={1} justifyContent="flex-start">
      <Center fontSize={theme.fontSizes['lg']}>{monthName}</Center>
      <WeekDays width={162} />
      <MonthDays
        total={totalDays}
        startsAt={startsAt}
        onClick={handleDayClick}
      />
    </Stack>
  );
};

export default Month;
