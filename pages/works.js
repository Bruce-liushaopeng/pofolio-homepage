import {
  Container,
  Heading,
  ListItem,
  Text,
  Flex,
  UnorderedList,
  Badge
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import WorkItem from './workItem'
import Layout from '../components/layouts/articles'

const Paragraph = styled.p`
  text-indent: 10px;
`

const Work = () => {
  return (
    <Layout title="work">
      <Container>
        <Heading marginTop="30px">Work Experience</Heading>

        <WorkItem
          companyName={'Corning'}
          jobTitle={'Frontend Developer'}
          href="https://www.corning.com/optical-communications/worldwide/en/home/products/fiber.html"
        >
          <Flex>
            <Text fontSize={'lg'} fontWeight="bold">
              Full-Stack Developer
            </Text>
            <Text fontSize={'lg'} ml="10px" mb="10px">
              May 2022-Aug 2022
            </Text>
          </Flex>
            <Badge ml="4px" mt="-20px" mr="4px" colorScheme="blue">
                Typescript
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                React
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                Material UI
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                API
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                PostgreSql
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                .NET
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                Pixi.Js
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                Redux
            </Badge>

          <UnorderedList>
            <ListItem pb="5px">
              Contributed to the development of a full-stack web application
              using React, Redux, Material UI, ASP.NET, and PostgreSQL to
              customize optical fiber connection
            </ListItem>
            <ListItem pb="5px">
              Design and implemented Imperial Unit system feature by developing
              custom hook for functional components to fetch and update global
              state
            </ListItem>
            <ListItem pb="5px">
              Developed back-end API endpoint in C with ASP.NET, enabling batch
              modification of existing user designs.
            </ListItem>
            rashing of a backend service.
          </UnorderedList>
        </WorkItem>

        <WorkItem
          companyName={'March Networks'}
          jobTitle={'Frontend Developer'}
          href="https://searchlight.marchnetworks.com/"
        >
          <Flex>
            <Text fontSize={'lg'} fontWeight="bold">
            Frontend Developer
            </Text>
            <Text fontSize={'lg'} ml="10px" mb="10px">
              Sept 2021-Dec 2021
            </Text>
          </Flex>

          <Badge ml="4px" mt="-20px" mr="4px" colorScheme="blue">
                Typescript
            </Badge>
          <Badge mt="-20px" mr="4px" colorScheme="blue">
                React
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                Mobx
            </Badge>

            <Badge mt="-20px" mr="4px" colorScheme="blue">
                Ant Design
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                API
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                AWS Lambda
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                Docker
            </Badge>
            <Badge mt="-20px" mr="4px" colorScheme="blue">
                Jest
            </Badge>

          <UnorderedList>
            <ListItem pb="5px">
              Developed Transaction Report feature with React, Material UI, and
              Mobx for state management
            </ListItem>
            <ListItem pb="5px">
              Making sure the new features are well-tested with Jest, bringing
              up the global test coverage from 75% to 80%
            </ListItem>
            <ListItem pb="5px">
              Separated one large client-side master component into smaller
              components, making the specific function replaceable during
              runtime, by applying principles of dependency injection.
            </ListItem>
            <ListItem pb="5px">
              Debugged and optimized a Docker image, successfully resolving a
              bug related to the crashing of a backend service.
            </ListItem>
          </UnorderedList>
        </WorkItem>
        <WorkItem
          companyName={'Environment Canada'}
          jobTitle={'Data Scientist'}
          href="https://www.canada.ca/en/environment-climate-change.html"
        >
          <Flex>
            <Text fontSize={'lg'} fontWeight="bold">
              Data Scientist
            </Text>
            <Text fontSize={'lg'} ml="10px">
              Jan 2021-Aug 2021
            </Text>
          </Flex>
          <Badge ml="4px" mt="4px" mb="7px" mr="4px" colorScheme="blue">
                Python
            </Badge>
            <Badge mt="4px" mb="7px" mr="4px" colorScheme="blue">
                Azure Synapse
            </Badge>
            <Badge mt="4px" mb="7px" mr="4px" colorScheme="blue">
                Pipeline
            </Badge>
            <Badge mt="4px" mb="7px" mr="4px" colorScheme="blue">
                FME
            </Badge>
            <Badge mt="4px" mb="7px" mr="4px" colorScheme="blue">
                XML
            </Badge>
            <Badge mt="4px" mb="7px" mr="4px" colorScheme="blue">
                CI/CD
            </Badge>
          <UnorderedList>
            <ListItem pb="5px">
              Created a Python pipeline that fetched, filtered, and uploaded
              geospatial data from a catalog to an Azure MySQL database,
              delivering the data warehouse one month ahead of schedule.{' '}
            </ListItem>
            <ListItem pb="5px">
              Set up a continuous integration (CI) pipeline with GitHub Actions
              using a YAML file to automatically run over 10 unit tests,
              ensuring the reliability of the data processing pipeline.{' '}
            </ListItem>
          </UnorderedList>
        </WorkItem>
      </Container>
    </Layout>
  )
}

export default Work
