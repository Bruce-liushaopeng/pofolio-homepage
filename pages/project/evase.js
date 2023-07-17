import { Container, Badge, ListItem, List, Button } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/articles'
const Work = () => {
    return (
        <Layout title="evase">
            <Container>
                <Title>
                    Evase Security Analyzer <Badge>2023</Badge>
                </Title>
                <P>
                    Evase is a Software Analyze tool aiming to scan the software and find potential vulnerbilities such as SQL injection, Dictionary Attack
                </P>
                <List ml={4} my={4}>


                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JavaScript, Python, React, Flask</span>
                    </ListItem>


                </List>

                <List ml={4} my={4}></List>
                <Badge colorScheme={"blue"}  mb="4px" textTransform="none" fontSize="md">Front End View </Badge>
                <WorkImage src='/images/works/evase_2.png' alt="ball1" />

                <Badge colorScheme={"blue"}  mb="4px" textTransform="none" fontSize="md">Analysis result </Badge>
                <WorkImage src='/images/works/evase_3.png' alt="ball1" />
            </Container>
        </Layout>
    )
}

export default Work