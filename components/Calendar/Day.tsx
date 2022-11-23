import * as React from 'react';
import { Center, theme } from '@chakra-ui/react';
import Skeleton from '../Skeleton';

interface DayProps {
  day: number;
}

const Day = ({ day, ...props }: DayProps) => {
  return (
    <Skeleton size={18} {...props} hasHover>
      <Center fontSize={theme.fontSizes['xs']} fontWeight={'semibold'}>
        {day}
      </Center>
    </Skeleton>
  );
};

export default Day;
