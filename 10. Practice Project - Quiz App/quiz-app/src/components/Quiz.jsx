import { useState, useCallback } from "react";

import QUESTIONS from "../questions";
import Question from "./Question";
import Summery from "./Summery";

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnser
    ) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnser];
        });
    },
    []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return <Summery userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <div id="question">
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    );
}

export default Quiz;
