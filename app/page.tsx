'use client'

import { ChakraProvider} from '@chakra-ui/react'
// import { Practice} from './Practice'
import Header from './Header'
import Pricing from './Pricing'
import Features from './Features'
import DevelopedBy from './DevelopedBy'

export default function Home() {
  return (
    <>
      <ChakraProvider>
        {/* <Practice/> */}
        <Header />
        <Pricing />
        <Features />
      </ChakraProvider>
        <DevelopedBy />
    </>

  )
}
