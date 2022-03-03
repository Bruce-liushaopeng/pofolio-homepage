import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react' 
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/grid-item'
import thumbStockTrading from '../public/images/works/inkdrop_01.png'
import thumbRiskGame from '../public/images/works/walknote_eyecatch.png'
const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="StockTrading" title="StockTrading" thumbnail={thumbStockTrading}>
                        A Stock Trading App for practice trading skill
                    </WorkGridItem>
                </Section>
                <Section id="riskGame" title="riskGame" thumbnail={thumbRiskGame}>
                    <WorkGridItem id="riskGame" title="riskGame" thumbnail={thumbRiskGame}>
                        Multipler world conquoring game with AI player support
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works