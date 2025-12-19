import { useState } from "react";

function Quiz() {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    return <p>Currently ActiveQuestion</p>;
}

export default Quiz;
