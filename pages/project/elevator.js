import { Container,Badge,Link,List,ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/articles'

const Work = () => {
    return (
        <Layout title="riskGame">
            <Container>
                <Title>
                    Elevator Simulation <Badge>2022</Badge>
                </Title>
                <P>
                    A elevator simulation program to simulate 4 elevator cars and 20 floors, with a central scheduler controlling the behaviour of 4 elevator cars through async remote procedure call
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java, Maven, Swing, JVM multi-threading</span>
                    </ListItem>

                </List>
                <List ml={4} my={4}></List>

                <Badge colorScheme={"blue"} mb="3px">Panel View</Badge>
                <WorkImage src='/images/works/elevator_1.png' alt="elevator" />
                
                <Badge colorScheme={"blue"} mb="3px">Console Log</Badge>
                <WorkImage src='/images/works/elevator_2.png' alt="elevator" />
            </Container>
        </Layout>
    )
}

export default Work