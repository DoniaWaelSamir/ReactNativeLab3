import { useContext, useEffect } from "react";
import { getUserDetails } from "../actions";
import { usersContext } from "../context";
import { VStack, Box, Divider,Text, Heading, AspectRatio, Image, Center, HStack, Stack, NativeBaseProvider } from 'native-base';
export const UserDetails = ({ route }) => {
  const { id } = route.params;

  const resolve = async () => {
    dispatch(await getUserDetails(id));
  };
  useEffect(() => {
    if (id) resolve();

    return () => dispatch({ type: "CLEAR" });
  }, []);
  const { state, dispatch } = useContext(usersContext);
  const user = state.users.details;

  if (!user) return <Text>Loading ...</Text>;
  return (
     <Box>

    <Box alignItems="center" >
      <Box style={{backgroundColor:'#FAF0E6'}}  w="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box >

        </Box>

        <Stack p="4" space={3}>
          <Stack >
            <Heading size="md" ml="-1">
            {user.name}
            </Heading>
          </Stack>
          <Text fontWeight="400">
          Email: {user.email}
          </Text>
          <Text fontWeight="400">
          Phone: {user.phone}
          </Text>
          <Text fontWeight="400">
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </Box>
    
  );
};
