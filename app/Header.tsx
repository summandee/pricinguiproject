import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Header() {
    return (
        <Box bg={'#6B46C1'} textAlign={{base:'left', md:'left', lg:'center'}} 
        color={'white'} 
        pt={'100px'}
        pb={'250px'}
        pl={'15px'}
        >
            <Heading > Simple pricing Ui For Your Business</Heading>
            <Text  pt={'20px'} fontSize={'20px'}>Plans that are carefully crafted to suit your business</Text>
        </Box>
    )
}
