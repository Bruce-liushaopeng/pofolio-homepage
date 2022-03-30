import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Button,Container, Box, Heading, Image, useColorModeValue} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/articles'
const Page = () =>{
    return (
        <Layout>
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
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
            Bio
            </Heading>
            <BioSection>
                <BioYear>1999</BioYear>
                Born in Guangdong, China.
            </BioSection>
            <BioSection>
                <BioYear>2017</BioYear>
                Start Bachelor degree in Software Engineering. 
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Internship at Environment and Climate Change as Data Scientist.(8 months)
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Internship at March Network as Software Developer.(4 months)
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Internship at Corning Technology Center as Software Developer.(4 months)
            </BioSection>
            

        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            I ♥ 
            </Heading>
            <Paragraph>
            Art, Hip-hop, Sketch painting, Hiking, Biking, Gym, Kick-boxing
            </Paragraph>

        </Section>
        </Container>
        </Layout>
    )
}

export default Page 