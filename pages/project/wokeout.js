import { Container,Badge,Link,List,ListItem, AspectRatio } from "@chakra-ui/react";
import {Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/articles'
import wokeoutGif01 from '../../public/gif/wokeout_02.gif'
import wokeoutGif02 from '../../public/gif/wokeout_03.gif'

const Work = () => {
    return (
        <Layout title="WokeOut">
            <Container>
                <Title>
                    WokeOut Fitness Tracker <Badge>2023</Badge>
                </Title>
                <P>
                    A fitness tracker app allows you to view your gym progress and track everyday's fitness goal
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native, Redux, JavaScript, Firebase</span>
                    </ListItem>

                </List>
                <List ml={4} my={4}></List>

                <Badge colorScheme={"teal"} mb="3px">Add new record</Badge>
                <WorkImage src='/gif/wokeout_02.gif' width='70%'/>
               
                
                <Badge colorScheme={"teal"} mb="3px">View History Records</Badge>
                <WorkImage src='/gif/wokeout_03.gif' width='70%'/>

                <Badge colorScheme={"teal"} mb="3px">Login Via Google</Badge>
                <WorkImage src='/images/works/wokeout/wokeout_04.png' width='75%'/>
            </Container>
        </Layout>
    )
}

export default Work