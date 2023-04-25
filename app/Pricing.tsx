import React from 'react'
import { Box, Flex, Text, Heading, Button, HStack, Icon } from '@chakra-ui/react'
import CheckIcon from './CheckIcon'

export default function Pricing() {
  return (
    // Box Container
    <Box m={'auto'}
      maxWidth={'950px'}
      mt={'-100px'}
      bg={'white'}
      mx={{base:'20px', lg:'auto'}} 
      borderRadius={'10px'} 
      overflow={'hidden'}
      boxShadow={'0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)'}>
      <Flex direction={{base:'column',md:'column', lg:'row'}}>
        {/* Left Box */}
        <Box bg={'#c5c1cd'} p={'60px'} textAlign={'center'}>
          <Text fontSize={24}> Premium PRO </Text>
          <Heading>$329</Heading>
          <Text>Billed Just Once</Text>
          <Button w={'300px'} bg={'#6B46C1'} color={'#fff'} mt={'20px'}>Get Started</Button>
        </Box>
        {/* Right Box */}
        <Box pt={'50px'} pl={'25px'} pr={'25px'}>
          <Text mb={'15px'}>
            Access these features when you get this pricing package for your business.
          </Text>
          <HStack mb={'5px'}>
            <Icon as={CheckIcon} />
            <Text ml={'15px'}>International calling and messaging API</Text>
          </HStack>

          <HStack mb={'5px'}>
            <Icon as={CheckIcon} />
            <Text ml={'15px'}> Additional phone numbers</Text>
          </HStack>
          <HStack mb={'5px'}>
            <Icon as={CheckIcon} mr={'10px'} />
            <Text ml={'15px'}>Automated message via zapier</Text>
          </HStack>

          <HStack mb={'5px'}>
            <Icon as={CheckIcon} />
            <Text ml={'15px'}>24/7 Support and Consulting</Text>
          </HStack>

       
        </Box>
      </Flex >
    </Box >
  )
}
