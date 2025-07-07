import { ChakraProvider, Flex } from "@chakra-ui/react";
import { HashRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar";
import StartQuiz from './pages/startQuiz';
import QuizPage from "./pages/quizPage";
import ResultPage from "./pages/resultPage";
import Home from "./pages/home";

function App() {
  return (
    <HashRouter>
      <Flex>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start/:subject" element={<StartQuiz />} />
          <Route path="/quiz/:subject" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Flex>
    </HashRouter>
  )
}

export default App;

