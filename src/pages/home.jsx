import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    Flex,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Flex
            flex="1"
            height="100vh"
            justify="center"
            align="center"
            bg="gray.50"
            px={4}
        >
            <Box
                w="100%"
                maxW="3xl"
                p={[6, 10]}
                bg="white"
                boxShadow="xl"
                borderRadius="lg"
                textAlign="center"
            >
                <VStack spacing={6}>
                    <Heading size="xl" color="teal.600">
                        Welcome to the Test My Knowledge
                    </Heading>

                    <Text fontSize="lg" color="gray.700">
                        🚀 A fast, modern, and intuitive quiz platform — <strong>built by a developer for developers</strong>.
                        Practice your knowledge in React, Node.js, JavaScript, Angular, and more.
                    </Text>

                    <Text fontSize="md" color="gray.600">
                        🎯 Whether you're preparing for interviews, brushing up skills, or just challenging yourself —
                        this app is made to help you grow.
                    </Text>

                    <Text fontSize="md" color="gray.600">
                        🛠️ <strong>Need a custom quiz platform?</strong> I can help you build tailor-made quiz solutions
                        for schools, colleges, bootcamps, or corporate training — with branding, admin panels, and analytics.
                    </Text>

                    <Button
                        colorScheme="teal"
                        size="lg"
                        onClick={() => navigate("/start/react")}
                    >
                        Start Practicing
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
}
