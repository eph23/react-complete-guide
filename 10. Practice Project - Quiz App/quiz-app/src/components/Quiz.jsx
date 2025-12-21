import { useState, useCallback } from "react";

// import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

import QUESTIONS from "../questions";
import questions from "../questions";

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
                    selectedAnser === questions[activeQuestionIndex].answers[0]
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
                <img src="quiz-complete.png" alt="Trophy Image" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                    timeout={10000}
                    onTimeout={handleSkipAnswer}
                    key={activeQuestionIndex}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => {
                        const isSelected =
                            userAnswers[userAnswers.length - 1] === answer;
                        let cssClass = "";
                        if (answerState === "answered" && isSelected) {
                            cssClass = "selected";
                        }

                        if (
                            (answerState === "correct" ||
                                answerState === "wrong") &&
                            isSelected
                        ) {
                            cssClass = answerState;
                        }

                        return (
                            <li key={answer} className="answer">
                                {
                                    <button
                                        onClick={() =>
                                            handleSelectAnswer(answer)
                                        }
                                        className={cssClass}
                                    >
                                        {answer}
                                    </button>
                                }
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Quiz;
