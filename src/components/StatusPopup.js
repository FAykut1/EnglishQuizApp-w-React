import styled from "styled-components";

const StatusPopup = ({ status }) => {
  return (
    <StyledStatusPopup display={status?.display}>
      <StyledStatusContainer display={status?.display}>
        <div className="status-title">{status?.title}</div>
        <button onClick={status?.onClick}>Next</button>
      </StyledStatusContainer>
    </StyledStatusPopup>
  );
};

const StyledStatusPopup = styled.div`
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s;
`;

const StyledStatusContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  background-color: #2c394b;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 0 0 4px black;
  opacity: ${({ display }) => (display ? "1" : "0")};
  transition: opacity 0.5s;
  .status-title {
    color: green;
    font-size: 64px;
    font-weight: bold;
    text-shadow: 0 0 4px green;
  }

  button {
    padding: 12px 24px;
    background-color: hsl(10, 100%, 58%);
    border: none;
    color: white;
    font-size: 18px;
    &:hover {
      cursor: pointer;
      background-color: hsl(10, 100%, 50%);
    }
  }
`;

export default StatusPopup;
