import { Link } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StyledMainDiv>
      <StyledLogo>
        <img className="image" src="" alt="app logo" />
      </StyledLogo>

      <div className="title">Wanna learn english?</div>

      <StyledContent>
        <Link className="link" to="/vocabulary/en-tr">
          Learn Vocabulary
        </Link>
        <Link className="link" to="/quiz/">
          Quick Quiz
        </Link>
      </StyledContent>
    </StyledMainDiv>
  );
};

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: bold;
    text-shadow: 2px 3px 6px black;
    color: var(--secondary-color);
    font-size: 48px;
    text-align: center;
    margin-bottom: 24px;
  }
`;

const StyledLogo = styled.div`
  width: 240px;
  height: 240px;
  margin: 24px 0;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 4px 6px 2px black;
  .image {
    margin: 24px; //TODO: Remove when picture came
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
    width: 200px;
    height: 60px;
    text-decoration: none;
    margin-bottom: 12px;
  }
`;

export default MainPage;
