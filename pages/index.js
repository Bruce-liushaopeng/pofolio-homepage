import { Container, Box, Heading} from '@chakra-ui/react'
const Page = () =>{
    return (
        <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Hello, I'm a software engineering student at Ottawa!
        </Box>
        <Box display = {{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Shaopeng Bruce Liu
                </Heading>
            <p>Digital Craftman ( Developer / Designer )</p>
            </Box>
        </Box>
        
        </Container>
    )
}

export default Page 