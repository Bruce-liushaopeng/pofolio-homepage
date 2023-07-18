import {
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/grid-item'
import thumbStockTrading from '../public/images/works/stock_trading.png'
import thumbRiskGame from '../public/images/works/risk_game.png'
import thumbElevator from '../public/images/works/elevator.png'
import thumbBall from '../public/images/works/ball_0.png'
import thumbEvase from '../public/images/works/evase_1.png'
import thumbWokeout from '../public/images/works/wokeout_01.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Project
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="wokeout" title="Wokeout Gym Goal tracker" thumbnail={thumbWokeout}>
            Track your workout progress
          </WorkGridItem>
        </Section>
      <Section>
          <WorkGridItem id="evase" title="Evase Security Analyzer" thumbnail={thumbEvase}>
            Analysis for software attack entry points and provide analysis report
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ball" title="3D Ball Game" thumbnail={thumbBall}>
            Bouncing physical for ball chasing, with logic of friction
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="elevator"
            title="Elevator Simulator"
            thumbnail={thumbElevator}
          >
            TCP communication between elevators to perform tasks efficiently
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="riskGame"
            title="Risk Game"
            thumbnail={thumbRiskGame}
          >
            Multiplayer world conquoring game, AI opponent available for challenge
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="stockTrading"
            title="Stock Trading Platform"
            thumbnail={thumbStockTrading}
          >
            Use for practice trading skill with real stock price
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      
    </Container>
  )
}

export default Works
