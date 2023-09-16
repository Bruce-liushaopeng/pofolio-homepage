import { Container, Badge, ListItem, List, Button } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/articles'
import Link from 'next/link'

const Work = () => {
    return (
        <Layout title="Calculator">
            <Container>
                <Title>
                    Cloud Calculator <Badge>2023</Badge>
                </Title>
                <P>
                    Cloud Calculator is powered by popular cloud providers and record the respond time from them. 
                </P>
                <List ml={4} my={4}>


                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Typescript, React, AWS Lambda, GCP, Azure</span>
                    </ListItem>


                </List>
                <Link href="https://bruce-liushaopeng.github.io/Cloud-Calculator/" isExternal="true" align="center">
                    <div align="center"><Button colorScheme={"teal"} marginTop={"10px"}> Try it out</Button></div>

                </Link>

                <List ml={4} my={4}></List>
                <Badge colorScheme={"teal"} mb="3px">Main page </Badge>
                <WorkImage src='/images/works/calculator/calculator02.png' alt="calculator2" />
            </Container>
        </Layout>
    )
}

export default Work