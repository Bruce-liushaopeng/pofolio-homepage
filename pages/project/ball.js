import { Container, Badge, ListItem, List, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/articles'
import Link from 'next/link'

const Work = () => {
    return (
        <Layout title="3D Ball Game">
            <Container>
                <Title>
                    3D Ball Game <Badge>2023</Badge>
                </Title>
                <P>
                    3D Ball Game made with Three JS, with effort of implementing friction and acceleration. Using central controller to communicate balls' position and speed.
                </P>
                <P>
                    try it yourself ! catch the yellow ball !!
                </P>
                <List ml={4} my={4}>


                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JavaScript, Three.Js</span>
                    </ListItem>


                </List>
                <Link href="https://main--dazzling-melomakarona-49b090.netlify.app/" isExternal="true" align="center">
                    <div align="center"><Button colorScheme={"teal"} marginTop={"10px"}> Play Game </Button></div>

                </Link>

                <List ml={4} my={4}></List>
                <Badge colorScheme={"teal"} mb="3px">Game </Badge>
                <WorkImage src='/images/works/ball/ball_1.png' alt="ball1" />
            </Container>
        </Layout>
    )
}

export default Work