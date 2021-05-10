import { Flex, Button, Heading, Input } from '@chakra-ui/react'

const IndexPage = () => (
  <Flex height='100vh' alignItems='center' justifyContent='center'>
    <h1>Flex 1 </h1>
    <Flex direction='column' background='gray.100' p={12} rounded={6}>
      <Heading mb={6}>Log In</Heading>
      <Input placeholder='a@a.com' variant='filled' mb={3} type='email' />
      <Input placeholder='***' variant='filled' mb={6} type='password' />
      <Button colorScheme='teal'>Log In</Button>
    </Flex>
    

  </Flex>
)

export default IndexPage
