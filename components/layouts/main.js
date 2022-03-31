import Head from 'next/head'
import Navbar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'
import noSsr from '../no-ssr.js'
const Main = ({children, router}) => {
    return (
        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Bruce Liu - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW='container.md' pt={14}>
            <noSsr>
                <VoxelDog/>
            </noSsr>
              {children}
            </Container>
        </Box>
    )
}

export default Main