import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledField className="title">
        <Link className="link" to="/">
          English Quiz
        </Link>
      </StyledField>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100vw;
  height: var(--header-height);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
`;

const StyledField = styled.div`
  font-weight: bold;
  font-size: 32px;

  .link {
    color: var(--secondary-text-color);
    text-decoration: none;
  }
`;

export default Header;
