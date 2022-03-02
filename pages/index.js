import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Button,Container, Box, Heading, Image, useColorModeValue} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import Paragraph from '../components/paragraph'
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
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                About Me
            </Heading>
            <Paragraph>
                Bruce is a Software Engineering student in Ottawa with passion for solving real-world problem with 
                technology.
                With interest in all sort of technologies from Frontend React, Android App development,
                to backend development with NodeJs, express, and database management. 
            </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                   My portfolio
                </Button> 
            </NextLink>
        </Box>
        </Section>
        </Container>
    )
}

export default Page 