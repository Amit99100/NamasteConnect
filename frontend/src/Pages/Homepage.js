import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { black } from "colors";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);



  return (
    // it will make responsive , when mobile and pc ( so i used container here . )
    //maxwidth xl( xtra larage . )
    //content will center . 
    <Container maxW="xl" color="white" centerContent>


      <Box mt={"5%"} shadow="dark-lg" bg={"white"} color={"black"} c="black" w="100%" p={4} borderRadius="lg" borderWidth="2px" className="login_box">
        {/* <Text m={"1rem"} color="black" fontSize="4xl" fontFamily="Georgia" >
          NamasteConnect
        </Text> */}
        <Text fontSize="3xl" fontWeight="bold" color="teal.500">
          Welcome to NamasteConnect
        </Text>
        <Text fontSize="lg" color="gray.500">
          Connect with the people you care about 😊
        </Text>

        <Tabs isFitted variant="solid-rounded" colorScheme="teal">
          <TabList mb="1em" mt="1em">
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Box>

    </Container >

  );
}

export default Homepage;
