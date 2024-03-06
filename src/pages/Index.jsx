import React from "react";
import { Box, Container, Flex, VStack, HStack, Text, Input, Button, IconButton, Avatar, Divider, useColorModeValue, Stack, Heading, Textarea } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={5}>
        {/* Sidebar */}
        <VStack w="full" h="full" p={5} spacing={5} alignItems="flex-start" bg={bg}>
          <IconButton size="lg" variant="ghost" aria-label="Twitter" icon={<FaTwitter size={30} />} />
          <VStack alignItems="flex-start" spacing={3}>
            <Button leftIcon={<FaHome />} justifyContent="flex-start" variant="ghost" w="full">
              Home
            </Button>
            <Button leftIcon={<FaHashtag />} justifyContent="flex-start" variant="ghost" w="full">
              Explore
            </Button>
            <Button leftIcon={<FaBell />} justifyContent="flex-start" variant="ghost" w="full">
              Notifications
            </Button>
            <Button leftIcon={<FaEnvelope />} justifyContent="flex-start" variant="ghost" w="full">
              Messages
            </Button>
            <Button leftIcon={<FaBookmark />} justifyContent="flex-start" variant="ghost" w="full">
              Bookmarks
            </Button>
            <Button leftIcon={<FaListAlt />} justifyContent="flex-start" variant="ghost" w="full">
              Lists
            </Button>
            <Button leftIcon={<FaUserAlt />} justifyContent="flex-start" variant="ghost" w="full">
              Profile
            </Button>
            <Button leftIcon={<FaEllipsisH />} justifyContent="flex-start" variant="ghost" w="full">
              More
            </Button>
          </VStack>
          <Button colorScheme="twitter" leftIcon={<FaFeatherAlt />} w="full">
            Tweet
          </Button>
          <Flex alignItems="center" mt="auto">
            <Avatar size="sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Box ml={3}>
              <Text fontWeight="bold">John Doe</Text>
              <Text fontSize="sm" color="gray.500">
                @johndoe
              </Text>
            </Box>
          </Flex>
        </VStack>

        {/* Feed */}
        <VStack w="full" h="full" p={5} spacing={5} alignItems="flex-start" bg={bg}>
          <HStack spacing={4} w="full">
            <Avatar size="md" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Input placeholder="What's happening?" />
          </HStack>
          <Divider />
          <VStack spacing={5} w="full">
            {/* Tweet */}
            <HStack w="full" spacing={4}>
              <Avatar size="md" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
              <VStack align="start">
                <Text fontWeight="bold">
                  Jane Smith{" "}
                  <Text as="span" color="gray.500">
                    @janesmith
                  </Text>
                </Text>
                <Text>Just had an amazing day at the beach with friends! #sunnyday #beachlife</Text>
                <Image src="https://images.unsplash.com/photo-1679679008398-1b01fd7698bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxiZWFjaHxlbnwwfHx8fDE3MDk3MzMxNjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" />
              </VStack>
            </HStack>
            {/* More tweets */}
          </VStack>
        </VStack>

        {/* Trends */}
        <VStack w="full" h="full" p={5} spacing={5} alignItems="flex-start" bg={bg}>
          <Box p={5} w="full" bg="white" borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={5}>
              Trends for you
            </Heading>
            {/* Trend */}
            <VStack spacing={3} align="start">
              <Text fontWeight="bold">#React</Text>
              <Text fontSize="sm" color="gray.500">
                50K Tweets
              </Text>
              {/* More trends */}
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
