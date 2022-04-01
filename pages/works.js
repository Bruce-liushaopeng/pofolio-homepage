import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react' 
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/grid-item'
import thumbStockTrading from '../public/images/works/stock_trading.png'
import thumbRiskGame from '../public/images/works/risk_game.png'
import thumbElevator from '../public/images/works/elevator.png'
const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid  columns={[1,1,2]} gap={6}>
                <Section >
                    <WorkGridItem id="riskGame" title="riskGame" thumbnail={thumbRiskGame}>
                        Multiplayer world conquoring game with save-load feature, maximum 6 players, and option of Human vs AI

                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="elevator" title="elevator" thumbnail={thumbElevator}>
                        Real-time elevator simulator that can handles request from 20 floors with 4 elevator cars controled by a central request scheduler.
                    </WorkGridItem>
                </Section>
                <Section >
                    <WorkGridItem id="stockTrading" title="StockTrading" thumbnail={thumbStockTrading}>
                        A Stock Trading App for practice trading skill, generate flow chart based off today's stock price. User with registered account can see their trading history
                    </WorkGridItem>
                </Section>
                
            </SimpleGrid>
        </Container>
    )
}

export default Works