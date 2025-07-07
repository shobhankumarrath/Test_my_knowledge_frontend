import {
    Box,
    Button,
    Heading,
    Radio,
    RadioGroup,
    Stack,
    Text,
    VStack,
    useToast,
    Flex
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import reactQuestions from "../Questions/React";
import axios from "axios";
import javascriptQuestions from "../Questions/javascript";
import nodejsquestions from "../Questions/node";
import angularQuestions from "../Questions/angular";
import typescriptQuestions from "../Questions/typescript";
import pythonQuestions from "../Questions/python";
import webSecurityQuestions from "../Questions/websecurity";
import htmlQuestions from "../Questions/html";

const questionBank = {
    react: reactQuestions,
    javascript: javascriptQuestions,
    node: nodejsquestions,
    angular: angularQuestions,
    typescript: typescriptQuestions,
    python: pythonQuestions,
    websecurity: webSecurityQuestions,
    html: htmlQuestions,
};

export default function QuizPage() {
    const { subject } = useParams();
    const toast = useToast();
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(420); // 7 mins

    useEffect(() => {
        const data = questionBank[subject];
        const shuffled = [...data].sort(() => 0.5 - Math.random()).slice(0, 10);
        setQuestions(shuffled);
    }, [subject]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleSubmit();
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleAnswer = (value) => {
        setAnswers({ ...answers, [currentIndex]: Number(value) });
    };

    const handleSubmit = async () => {
        if (Object.keys(answers).length < 10) {
            toast({
                title: "Please answer all questions before submitting.",
                status: "warning",
                duration: 3000,
            });
            return;
        }
        const user = JSON.parse(localStorage.getItem("quizuser"));
        const score = questions.reduce((acc, q, idx) => {
            if (answers[idx] === q.correctAnswer) acc += 10;
            return acc;
        }, 0);

        try {
            await axios.post("https://test-my-knowledge-backend.onrender.com/api/send-email", {
                name: user.name,
                email: user.email,
                subject,
                score,
            }, {
                headers: {
                    "x-api-key": "super_secure_api_key_123",
                }
            });

            toast({
                title: `Quiz Submitted! Score: ${score}/100`,
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            navigate("/result", { state: { score, subject } });
        } catch (error) {
            console.error("Email Sent Error", error);
            console.log(error);
            toast({
                title: "Submission Failed",
                description: "Couldn't Send Email. Please Try again Later",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    if (questions.length === 0) return <Text>Loading Quiz...</Text>;

    return (
        <Flex flex="1" justify="center" align="center" minH="100vh" bg="gray.50" px={4}>
            <Box
                maxW="600px"
                w="100%"
                p={8}
                bg="white"
                boxShadow="lg"
                borderRadius="md"
            >
                <Heading size="md" mb={4} textAlign="center">
                    Time Left: {Math.floor(timeLeft / 60)}:
                    {(timeLeft % 60).toString().padStart(2, "0")}
                </Heading>

                <VStack align="start" spacing={4}>
                    <Text fontSize="lg" fontWeight="bold">
                        Question {currentIndex + 1} of {questions.length}
                    </Text>
                    <Text>{questions[currentIndex].question}</Text>

                    <RadioGroup
                        value={answers[currentIndex]?.toString() || ""}
                        onChange={handleAnswer}
                    >
                        <Stack direction="column">
                            {questions[currentIndex].options.map((opt, i) => (
                                <Radio key={i} value={i.toString()}>
                                    {opt}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>

                    <Stack direction="row" mt={4}>
                        <Button
                            onClick={() => setCurrentIndex((prev) => prev - 1)}
                            isDisabled={currentIndex === 0}
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={() => setCurrentIndex((prev) => prev + 1)}
                            isDisabled={currentIndex === questions.length - 1}
                        >
                            Next
                        </Button>
                        {currentIndex === questions.length - 1 && (
                            <Button colorScheme="teal" onClick={handleSubmit}>
                                Submit
                            </Button>
                        )}
                    </Stack>
                </VStack>
            </Box>
        </Flex>
    );
}
