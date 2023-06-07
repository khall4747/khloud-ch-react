import * as React from 'react'
import './App.css'
import { ChakraProvider,Box } from '@chakra-ui/react'
import WithSubnavigation from './compont/nav'
import Image3 from '../public/pexels-rdne-stock-project-7755240.jpg'
function App2() {
    //base >> responsef for nutral size  md>> next lg >>next larger for bg={{base: md: lg: }} or any tag
    
      return (
        <>
        <ChakraProvider> <WithSubnavigation/> 
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={Image3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Nails</Heading>

      <Text py='2'>
      Book an appointment for a manicure.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
      Appointment Booking
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={Image3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Nails</Heading>

      <Text py='2'>
      Book an appointment for a manicure.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
      Appointment Booking
      </Button>
    </CardFooter>
  </Stack>
</Card>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={Image3}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Nails</Heading>

      <Text py='2'>
      Book an appointment for a manicure.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
      Appointment Booking
      </Button>
    </CardFooter>
  </Stack>
</Card>
    <Footer/>
    </ChakraProvider>
       
         
        </>
      )
      
    }
    
    export default App2
    