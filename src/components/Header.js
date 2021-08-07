import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledField className="title">EnglishQuiz</StyledField>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
  height: var(--header-height);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--secondary-color);
  color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
`;

const StyledField = styled.div`
  font-weight: bold;
  font-size: 36px;
`;

export default Header;
