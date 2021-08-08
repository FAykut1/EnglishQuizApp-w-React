import { useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import StatusPopup from "../components/StatusPopup";
import db from "../example_db.json";

const VocabularyQuizPage = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [isScale, setisScale] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef(null);

  const allQuestions = db.questions;

  const [currentQuestion, setcurrentQuestion] = useState(allQuestions[0]);

  const translateInputOnChange = (e) => {
    setCurrentInput(e.target.value);
    setisScale(true);

    setTimeout(() => {
      setisScale(false);
    }, 200);

    if (e.target.value === currentQuestion.answer.content) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  const correctAnswer = () => {
    // Correct answer
    inputRef.current.readOnly = true;
    setShowPopup(true);
    // next question called to popup
  };

  const wrongAnswer = () => {
    //nothing for now
  };

  const getNextQuestion = () => {
    setShowPopup(false);
    setCurrentInput("");
    inputRef.current.value = "";
    inputRef.current.readOnly = false;
    // get next question
    const nextQuestion = allQuestions[currentQuestion._id + 1];
    setcurrentQuestion(nextQuestion);
  };

  if (!currentQuestion) {
    return <div>You answered all the questions congrats!</div>;
  }

  return (
    <StyledTranslateDiv scale={isScale}>
      <div className="translate">
        What does it mean
        <span className="word">"{currentQuestion.question.content}"</span>
      </div>
      <StyledTranslateContainer
        correct={currentInput === currentQuestion.answer.content}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Means"
          onChange={translateInputOnChange}
        />
      </StyledTranslateContainer>
      <StatusPopup
        status={{
          display: showPopup,
          title: "Correct!",
          onClick: getNextQuestion,
        }}
      />
    </StyledTranslateDiv>
  );
};

const ScaleOut = keyframes`
  from {
    font-size: 48px;
  }

  to {
    font-size: 44px;
  }
  `;

const ScaleIn = keyframes`
  from {
    font-size: 44px;
  }
  
  to {
    font-size: 48px;
  }
`;

const StyledTranslateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .translate {
    animation: ${({ scale }) =>
      scale
        ? css`
            ${ScaleOut} .1s linear forwards
          `
        : css`
            ${ScaleIn} .1s linear forwards
          `};
    font-size: 48px;
    color: white;
    text-shadow: 2px 3px 6px black;
    font-weight: bold;
    padding: 24px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 240px;
    .word {
      color: var(--primary-text-color);
    }
  }
`;

const StyledTranslateContainer = styled.div`
  box-shadow: 0px 0px 8px 2px hsl(215, 26%, 15%);
  height: 100px;
  padding: 12px;
  margin: 24px 0;
  display: flex;
  align-items: center;
  background-color: ${({ correct }) => (correct ? "green" : "#2c394b")};
  transition: 0.3s;

  input {
    font-size: 24px;
    text-align: center;
    border: none;
    flex: 1;
    color: white;
    font-weight: bold;
    background-color: unset;
    &:focus {
      outline: none;
    }
  }

  .true {
    color: green;
  }
`;

export default VocabularyQuizPage;
