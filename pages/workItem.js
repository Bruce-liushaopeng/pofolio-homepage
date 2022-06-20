import { Box, Container, Badge } from "@chakra-ui/react"
import { Title } from "../components/work"
import { Link } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
const WorkItem = ({ companyName, children, jobTitle, href }) => {
    return (
        <Container margin={"35px 0px 20px 0px"}>
            <Link _hover={{
                background: "white",
                color: "#086F83",
                fontWeight: "bold"
            }} href={href} color="teal.300" isExternal="true" textUnderlineOffset={"8px"}>
                <Heading as="h2" variant={"section-title"} >
                    {companyName}

                </Heading>
            </Link>


            <Box>
                {children}
            </Box>
        </Container>
    )
}

export default WorkItem