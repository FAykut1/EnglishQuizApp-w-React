import { useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const ExTranslatable = {
  id: 1,
  word: "queue",
  means: {
    tr: "kuyruk",
  },
};

const VocabularyQuizPage = () => {
  const [currentTranslate, setCurrentTranslate] = useState(ExTranslatable);
  const [currentInput, setCurrentInput] = useState("");
  const [isScale, setisScale] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef(null);

  const translateInputOnChange = (e) => {
    setCurrentInput(e.target.value);
    setisScale(true);

    setTimeout(() => {
      setisScale(false);
    }, 200);

    if (e.target.value === currentTranslate.means.tr) {
      //TODO: go to next translation
      inputRef.current.readOnly = true;
      setShowPopup(true);
    }
  };

  const getNextTranslation = () => {
    setShowPopup(false);
  };

  return (
    <StyledTranslateDiv scale={isScale}>
      <div className="translate">{currentTranslate.word}</div>
      <StyledTranslateContainer
        correct={currentInput === currentTranslate.means.tr}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Means"
          onChange={translateInputOnChange}
        />
      </StyledTranslateContainer>
    </StyledTranslateDiv>
  );
};

const ScaleOut = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);  
  }
`;

const ScaleIn = keyframes`
  from {
    transform: scale(1.1);
  }

  to {
    transform: scale(1);  
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
            ${ScaleOut} .2s linear forwards
          `
        : css`
            ${ScaleIn} .2s linear forwards
          `};
    font-size: 48px;
    color: white;
    text-shadow: 4px 6px 6px black;
    font-weight: bold;
    padding: 24px;
  }
`;

const StyledTranslateContainer = styled.div`
  box-shadow: 0px 0px 8px 2px hsl(215, 26%, 15%);
  height: 100px;
  padding: 12px;
  margin: 24px 0;
  display: flex;
  align-items: center;
  background-color: #2c394b;

  input {
    font-size: 24px;
    text-align: center;
    border: none;
    flex: 1;
    color: ${({ correct }) => (correct ? "green" : "white")};
    font-weight: bold;
    background-color: unset;
    transition: color 0.3s;
    &:focus {
      outline: none;
    }
  }

  .true {
    color: green;
  }
`;

export default VocabularyQuizPage;
