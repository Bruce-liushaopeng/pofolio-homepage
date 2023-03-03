import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/grid-item'
import thumbStockTrading from '../public/images/works/stock_trading.png'
import thumbRiskGame from '../public/images/works/risk_game.png'
import thumbElevator from '../public/images/works/elevator.png'
import thumbAmz from '../public/images/works/amz_0.png'
import thumbBall from '../public/images/works/ball_0.png'
const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
                <Section >
                    <WorkGridItem id="amz" title="amz" thumbnail={thumbAmz}>
                        Amazon-clone with real-user payment
                    </WorkGridItem>
                </Section>
                <Section >
                    <WorkGridItem id="ball" title="ball" thumbnail={thumbBall}>
                        3-D ball Game, Arrow Keys control
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works