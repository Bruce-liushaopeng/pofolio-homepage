import { Container, Badge, ListItem, List, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/articles'
import Link from 'next/link'

const Work = () => {
    return (
        <Layout title="riskGame">
            <Container>
                <Title>
                    Amazon-clone <Badge>2022</Badge>
                </Title>
                <P>
                    Amazon-clone that can handles user registration and store user data in firebase cloud database, Backend payment using stripe to allow user to enter real credit card credential and store their purchase history in the database.
                </P>
                <List ml={4} my={4}>


                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JavaScript, ReactJs, Firebase, Stripe</span>
                    </ListItem>


                </List>
                <Link href="https://clone-9d90e.firebaseapp.com/" isExternal="true" align="center">
                    <div align="center"><Button colorScheme={"teal"} marginTop={"10px"}> View Page </Button></div>

                </Link>

                <List ml={4} my={4}></List>
                <Badge colorScheme={"teal"} mb="3px">Login / Registration </Badge>
                <WorkImage src='/images/works/amz_1.png' alt="amazon" />

                <Badge colorScheme={"teal"} mb="3px">Home Page</Badge>
                <WorkImage src='/images/works/amz_2.png' alt="amazon" />

                <Badge colorScheme={"teal"} mb="3px">Shopping Basket</Badge>
                <WorkImage src='/images/works/amz_3.png' alt="amazon" />

                <Badge colorScheme={"teal"} mb="3px">Checkout</Badge>
                <WorkImage src='/images/works/amz_4.png' alt="amazon" />
            </Container>
        </Layout>
    )
}

export default Work