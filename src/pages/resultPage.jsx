import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    Flex,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

export default function ResultPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { score, subject } = location.state || {};
    const user = JSON.parse(localStorage.getItem("quizuser"));
    const { width, height } = useWindowSize();

    useEffect(() => {
        if (!score || !user) {
            navigate("/");
        }
    }, [score, user, navigate]);

    return (
        <Flex
            flex="1"
            height="100vh"
            justify="center"
            align="center"
            bg="gray.100"
            px={4}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ width: "100%", maxWidth: "600px" }}
            >
                {width && height && <Confetti width={width} height={height} />}

                <Box
                    p={8}
                    bg="white"
                    boxShadow="2xl"
                    borderRadius="lg"
                    textAlign="center"
                >
                    <Heading size="lg" mb={4}>
                        🎉 Great Job, {user?.name}
                    </Heading>

                    <Text fontSize="xl" mb={4}>
                        You have completed the{" "}
                        <strong>{subject?.toUpperCase()}</strong> quiz!
                    </Text>

                    <Text fontSize="2xl" fontWeight="bold" color="teal.500" mb={6}>
                        Your Score: {score}/100
                    </Text>

                    <Text fontSize="md" color="gray.600" mb={4}>
                        A detailed score summary has also been sent to your email:<br />
                        <strong>{user?.email}</strong>
                    </Text>

                    <VStack spacing={4} mt={6}>
                        <Button colorScheme="teal" w="full" onClick={() => navigate("/")}>
                            Go To Home
                        </Button>
                        <Button variant="outline" w="full" onClick={() => navigate(`/quiz/${subject}`)}>
                            Retake Quiz
                        </Button>
                    </VStack>
                </Box>
            </motion.div>
        </Flex>
    );
}
