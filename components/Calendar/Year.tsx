import * as React from 'react';
import { Center, Grid } from '@chakra-ui/react';
import Month from './Month';

interface YearProps {
  year: number;
}

const Year = ({ year, ...props }) => {
  function handleOnClick(date) {
    console.log(date);
  }

  return (
    <div>
      <Grid templateColumns={`repeat(3, 1fr)`} gap={5} width={0} {...props}>
        {[...Array(12)].map((_$, idx) => {
          return (
            <Month
              key={idx}
              year={year}
              month={idx + 1}
              onClick={handleOnClick}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Year;
