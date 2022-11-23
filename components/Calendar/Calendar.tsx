import * as React from 'react';
import Year from './Year';
import { Box, Center, theme } from '@chakra-ui/react';

interface CalendarProps {
  year: number;
}

const Calendar = ({ year, ...otherProps }: CalendarProps) => (
  <Box {...otherProps}>
    <Center fontSize={theme.fontSizes['2xl']} mb={6}>
      {year}
    </Center>
    <Year year={year} />
  </Box>
);

export default Calendar;
