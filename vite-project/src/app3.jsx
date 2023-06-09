import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
      Reservation done
      </Heading>
      <Text color={'gray.500'}>
      Your appointment has been booked for a manicure.
      </Text>
    </Box>
  );
}