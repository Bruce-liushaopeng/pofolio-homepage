import { Container,Badge,Link,List,ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title,WorkImage,Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/articles'

const Work = () => {
    return (
        <Layout title="stock">
            <Container>
                <Title>
                    Stock Trading App <Badge>2021</Badge>
                </Title>
                <P>
                    An application for practicing stock trading skill, based on the actual stock price and trade with money in game
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, NodeJs, Express, MongoDB</span>
                    </ListItem>

                </List>
                <List ml={4} my={4}></List>
                <Badge colorScheme={"blue"} mb="3px">Trading Page</Badge>
                <WorkImage src='/images/works/StockTrading.png' alt="Stock Trading" />
            </Container>
        </Layout>
    )
}

export default Work