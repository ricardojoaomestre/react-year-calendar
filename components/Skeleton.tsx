import * as React from 'react';
import { Box, theme } from '@chakra-ui/react';

const Skeleton = ({ size, width, height, hasHover, ...otherProps }) => {
  const w = `${width || size}px`;
  const h = `${height || size}px`;

  return (
    <Box
      bg={theme.colors.gray[100]}
      rounded={3}
      w={w}
      h={h}
      _hover={hasHover && { bg: theme.colors.gray[200], cursor: 'pointer' }}
      {...otherProps}
    />
  );
};

export default Skeleton;
