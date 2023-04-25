import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import StarIcon from './StarIcon'
import PayIcon from './PayIcon'
import FeeIcon from './FeeIcon'

export default function Features() {
    return (
        <>
            <Box maxWidth={'800px'} margin={'auto'} mt={'40px'}>
                <Flex direction={{base:'column', md:'column', lg:'row'}} px={'50px'}>
                    <HStack mb={'20px'}>
                        <Icon as={StarIcon} />
                        <Text>30 days money back Guarantee</Text>
                    </HStack>

                    <HStack mb={'20px'}>
                        <Icon as={FeeIcon} />
                        <Text>No setup fees 100% hassle-free</Text>
                    </HStack>

                    <HStack mb={'20px'}>
                        <Icon as={PayIcon} />
                        <Text >No monthly subscription Pay once and for all</Text>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}
