import * as React from 'react';
import Calendar from './components/Calendar';
import { Flex } from '@chakra-ui/react';
import dayjs from './dayjs';

export default function App() {
  return (
    <Flex w="full" h="100vh" justifyContent="center" alignItems="center">
      <Calendar year={dayjs().year()} />
    </Flex>
  );
}
