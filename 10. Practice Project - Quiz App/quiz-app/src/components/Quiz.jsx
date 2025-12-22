import { useState, useCallback } from "react";

import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Question from "./Question";

function Quiz() {
    const [answerState, setAnswerState] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex =
        answerState === "" ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnser) {
            setAnswerState("answered");
            setUserAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnser];
            });

            setTimeout(() => {
                if (
                    selectedAnser === QUESTIONS[activeQuestionIndex].answers[0]
                ) {
                    setAnswerState("correct");
                } else {
                    setAnswerState("wrong");
                }

                setTimeout(() => {
                    setAnswerState("");
                }, 2000);
            }, 1000);
        },
        [activeQuestionIndex]
    );

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src="quizCompleteImg" alt="Trophy Image" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <div id="question">
                <Question
                    key={activeQuestionIndex}
                    questionText={QUESTIONS[activeQuestionIndex].text}
                    answers={QUESTIONS[activeQuestionIndex].answers}
                    answerState={answerState}
                    selectedAnswer={userAnswers[userAnswers.length - 1]}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    );
}

export default Quiz;
