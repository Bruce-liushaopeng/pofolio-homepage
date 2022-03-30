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
                        Elevator simulation can handles 22 floors and 4 elevator concurrently, controlled by a central scheduler to coordinate elevator cars with async remote procedure call
                    </WorkGridItem>
                </Section>
                <Section >
                    <WorkGridItem id="StockTrading" title="StockTrading" thumbnail={thumbStockTrading}>
                        A Stock Trading App for practice trading skill, generate flow chart based off today's stock price. User with registered account will
                    </WorkGridItem>
                </Section>
                
            </SimpleGrid>
        </Container>
    )
}

export default Works