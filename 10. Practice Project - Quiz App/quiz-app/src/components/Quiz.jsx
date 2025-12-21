import { useState } from "react";

import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

import QUESTIONS from "../questions";

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnser) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnser];
        });
    }

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src="quizCompleteImg" alt="Trophy Image" />
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
                    onTimeout={() => handleSelectAnswer(null)}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            {
                                <button
                                    onClick={() => handleSelectAnswer(answer)}
                                >
                                    {answer}
                                </button>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Quiz;
