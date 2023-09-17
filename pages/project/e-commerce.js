import {
  Container,
  Badge,
  ListItem,
  List,
  Button,
  Box,
  Flex,
  Text
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/articles'
import Link from 'next/link'

const Work = () => {
  return (
    <Layout title="Calculator">
      <Container>
        <Title>
          Cloud Calculator <Badge>2023</Badge>
        </Title>
        <P>
          Cloud Calculator is powered by popular cloud providers and record the
          respond time from them.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Typescript, React, AWS Lambda, GCP, Azure</span>
          </ListItem>
        </List>
        <Box>
          <Flex justifyContent="center">
            <Link
              href="https://e-commerce-store-xi-drab.vercel.app/"
              isExternal
            >
              <Button
                colorScheme="teal"
                marginTop="10px"
                width={'190px'}
                marginRight={'13px'}
              >
                Visit Store
              </Button>
            </Link>
            <Link
              href="https://e-commerce-admin-five-pi.vercel.app/5166abf9-e113-499d-9f0a-aee5ddf2b19d"
              isExternal
            >
              <Button colorScheme="teal" marginTop="10px" marginRight={'10px'}>
                View Admin Dashboard
              </Button>
            </Link>
          </Flex>
        </Box>

        <List ml={4} my={4}></List>
        <Text fontSize='5xl' fontWeight={'bold'} fontFamily={'cursive'}>Store Front</Text>
        <Badge colorScheme={'teal'} mb="3px">
          Home Page{' '}
        </Badge>
        <WorkImage
          src="/images/works/e-commerce/home-page.png"
          alt="e-commerce-image"
        />

        <Badge colorScheme={'teal'} mb="3px">
          Filter{' '}
        </Badge>

        <WorkImage
          src="/images/works/e-commerce/filter.png"
          alt="e-commerce-image"
        />
        <Badge colorScheme={'teal'} mb="3px">
          Item Preview{' '}
        </Badge>
        <WorkImage
          src="/images/works/e-commerce/item-preview.png"
          alt="e-commerce-image"
        />
        <Badge colorScheme={'teal'} mb="3px">
          Item detail{' '}
        </Badge>
        <WorkImage
          src="/images/works/e-commerce/item-detail.png"
          alt="e-commerce-image"
        />
        <Badge colorScheme={'teal'} mb="3px">
          Shopping Cart{' '}
        </Badge>
        <WorkImage
          src="/images/works/e-commerce/shopping-cart.png"
          alt="e-commerce-image"
        />
        <Badge colorScheme={'teal'} mb="3px">
          Checkout{' '}
        </Badge>
        <WorkImage
          src="/images/works/e-commerce/checkout.png"
          alt="e-commerce-image"
        />

    <Text fontSize='5xl' fontWeight={'bold'} fontFamily={'cursive'}>Admin Dashboard</Text>
    <Badge colorScheme={'teal'} mb="3px">
          Dashboard{' '}
        </Badge>
        <WorkImage
          src="https://res.cloudinary.com/dkktswnhi/image/upload/v1694795550/Admin%20Pictures/Screenshot_2023-09-15_at_12.32.25_PM_uue0rf.png"
          alt="e-commerce-image"
        />
        <Badge colorScheme={'teal'} mb="3px">
          Orders{' '}
        </Badge>
        <WorkImage
          src="https://res.cloudinary.com/dkktswnhi/image/upload/v1694795948/Admin%20Pictures/Screenshot_2023-09-15_at_12.38.42_PM_hxl8td.png"
          alt="e-commerce-image"
        />
        <Badge colorScheme={'teal'} mb="3px">
          Create Product{' '}
        </Badge>
        <WorkImage
          src="https://res.cloudinary.com/dkktswnhi/image/upload/v1694795812/Admin%20Pictures/Screenshot_2023-09-15_at_12.36.44_PM_yuh9qi.png"
          alt="e-commerce-image"
        />
      </Container>
    </Layout>
  )
}

export default Work
