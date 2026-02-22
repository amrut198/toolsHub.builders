/**
 * AdSlot Component
 * AdSense placeholder with CLS-safe dimensions
 */

'use client';

import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import { memo } from 'react';

interface AdSlotProps {
  slot: string;
  width?: string;
  height?: string;
  className?: string;
}

export const AdSlot = memo(function AdSlot({
  slot,
  width = '100%',
  height = '90px',
  className,
}: AdSlotProps) {
  // Check if AdSense is configured
  const hasAdSense = typeof window !== 'undefined' && !!process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;

  return (
    <Box
      width={width}
      height={height}
      bg="gray.100"
      borderRadius="lg"
      overflow="hidden"
      className={className}
    >
      {hasAdSense ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
          data-ad-slot={slot}
        />
      ) : (
        // Placeholder for development
        <Flex
          width="100%"
          height="100%"
          align="center"
          justify="center"
          border="2px dashed"
          borderColor="gray.300"
        >
          <Text fontSize="xs" color="gray.400">
            Advertisement ({width} × {height})
          </Text>
        </Flex>
      )}
    </Box>
  );
});

export default AdSlot;
