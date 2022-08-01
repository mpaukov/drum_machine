import styled from "styled-components";

const Screen = styled.div`
  width: 240px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 15px;
  background-color: #d4d4d4;
  p {
    margin: 0;
    text-align: center;
    padding: 10px;
  }
`;

export const Display = ({ text }) => {
  return (
    <>
      <Screen>
        <p>{text}</p>
      </Screen>
    </>
  );
};
