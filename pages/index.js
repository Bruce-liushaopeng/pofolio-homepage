import { Container, Box, Heading, Image, useColorModeValue} from '@chakra-ui/react'
const Page = () =>{
    return (
        <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello, I'm a software engineering student in Ottawa!
        </Box>
        <Box display = {{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Shaopeng Bruce Liu
                </Heading>
            <p>Digital Enthusiast (Developer / Designer)</p>
            <Box flexShrink={0} mt={{base:6,md:0}} ml={{md:6}} align="center">
                <Image borderColor = "whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="130px" display="inline-block" borderRadius="full" src = "images/bruce.jpg" alt="profile image"/>
            </Box>
        </Box>
        </Box>
        </Container>
    )
}

export default Page 