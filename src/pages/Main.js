import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsTriangleFill } from "react-icons/bs";

const MainPage = () => {
  return (
    <StyledMainDiv>
      {/* <StyledLogo>
        <img className="image" src="" alt="app logo" />
      </StyledLogo> */}

      <div className="title">Wanna learn english?</div>

      <StyledContent>
        <Link className="link" to="/vocabulary/en-tr">
          <BsTriangleFill size={48} />
        </Link>
      </StyledContent>
    </StyledMainDiv>
  );
};

const StyledMainDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
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
  width: 200px;
  height: 200px;
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
    width: 120px;
    height: 120px;
    border-radius: 60px;
    text-decoration: none;
    margin-bottom: 12px;
    box-shadow: 0 0 2px black;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 6px black;
    }

    svg {
      transform: rotate(90deg);
    }
  }
`;

export default MainPage;
