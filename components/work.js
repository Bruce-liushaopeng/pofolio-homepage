import NextLink from 'next/link'
import  {Heading, Box,Image,Link,Badge, AspectRatio} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({children}) => (
    <Box>
        <NextLink href="/project">
            <Link>project</Link>
        </NextLink>

        <span>
            &nbsp;
            <ChevronRightIcon/>
            &nbsp;
        </span>
        <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({src,alt, width}) => (
    <Image borderRadius="lg"  src={src} alt={alt} mb={4} w={width ? width : 'full'} />
)

export const Meta = ({children}) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)