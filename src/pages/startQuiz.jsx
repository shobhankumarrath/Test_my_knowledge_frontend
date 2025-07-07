import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Heading,
    useToast,
    Flex,
    Link
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function StartQuiz() {
    const { subject } = useParams(); // ✅ Corrected
    const navigate = useNavigate();
    const toast = useToast();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value }); // ✅ Corrected
    };

    const handleStart = () => {
        if (!user.name || !user.email || !user.phone) {
            toast({
                title: "All fields are required",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        localStorage.setItem("quizuser", JSON.stringify(user)); // ✅ Corrected
        navigate(`/quiz/${subject}`); // ✅ Corrected
    };

    return (
        <Flex
            justify="center"
            align="center"
            minH="100vh"
            w="100%"
            bg="gray.50"
            px={4}
        >
            <Box
                w="100%"
                maxW="400px"
                p={6}
                bg="white"
                boxShadow="lg"
                borderRadius="md"
            >
                <Heading mb={6} size="md" textAlign="center">
                    Start Quiz - {subject.toUpperCase()}
                </Heading>
                <VStack spacing={4} align="stretch">
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Phone</FormLabel>
                        <Input
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <Button colorScheme="teal" onClick={handleStart} width="full">
                        Start Quiz
                    </Button>
                    <Link as={RouterLink} to="/" color="teal.500" textAlign="center">
                        ← Back to Home
                    </Link>
                </VStack>
            </Box>


        </Flex>
    );
}
