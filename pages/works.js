import { Container, Heading, ListItem, Text,Flex, UnorderedList} from "@chakra-ui/react"
import {Gi3DGlasses} from "react-icons/gi"
import WorkItem from "./workItem"
import Layout from "../components/layouts/articles"
const Work = () =>  {
    return(
        <Layout title="work">
        <Container>
            <Heading marginTop="30px">
                Work Experience
            </Heading>

            <WorkItem companyName={"March Networks"} jobTitle={"Software Developer"} href="https://searchlight.marchnetworks.com/">
                    <Flex>
                    <Text fontSize={"lg"} fontWeight="bold">
                        Software Developer
                        
                    </Text>
                    <Text fontSize={"lg"} ml="10px">
                        Sept 2021-Dec 2021
                    </Text>
                    
                    </Flex>

                    <UnorderedList me={"30px"}>
                        <ListItem>
                        Design and implement Transaction Service Time report using React.
                        </ListItem>
                        <ListItem ml="20px">
                        Designed, wrote, and tested UI components to implement pre-existing back-end functionality
                using JavaScript Frameworks including React, mobx and Ant Design.
                        </ListItem>
                        <ListItem ml="20px">
                        Implements Cube.js query to fetch data from AWS Redshift.
                        </ListItem>
                    </UnorderedList>

                    <UnorderedList>
                        <ListItem>
                       Upgrading existing features to make code more efficient and maintainable.
                        </ListItem>
                        <ListItem ml="20px">
                        Reducing component rendering time by adding logic to prevent duplicate backend fetching of the same content.             
                        </ListItem>
                        <ListItem ml="20px">
                        Refactoring god-class by separating its functions to smaller classes and rewriting Jest test for deach class to ensure no function is broken.
                        </ListItem>
                    </UnorderedList>

                    
            </WorkItem> 
            <WorkItem companyName={"Environment Canada"} jobTitle={"Data Scientist"} href="https://www.canada.ca/en/environment-climate-change.html">
                    <Flex>
                    <Text fontSize={"lg"} fontWeight="bold">
                        Data Scientist
                        
                    </Text>
                    <Text fontSize={"lg"} ml="10px">
                        Jan 2021-Aug 2021
                    </Text>
                    
                    </Flex>
                    <UnorderedList>
                        <ListItem>
                        Support data migration of a cloud-based Geospatial system with Azure and Python.
                        </ListItem>
                        <ListItem ml="20px">
                        Design and implemented ETL pipeline to download, transform and filter data with python script.
                        </ListItem>
                        <ListItem ml="20px">
                        Develop Python script to extract data from remote API and built report using powerBI
                        </ListItem>
                    </UnorderedList>

                    <UnorderedList me={"30px"}>
                        <ListItem>
                        Wrote, tested, and deployed python webhook to automate SQL server injection.
                        </ListItem>
                        <ListItem ml="20px">
                        Worked closely with data architect and third-party software company to design Tabular 
	   Database based on the business need.
                        </ListItem>
                        <ListItem ml="20px">
                        Deployed python scripts on MS Azure to listen to the third-party software and update SQL server
                        </ListItem>
                    </UnorderedList>
            </WorkItem> 

            
        </Container>
        </Layout>
    
    )}

export default Work
