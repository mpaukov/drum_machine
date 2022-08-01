import styled from "styled-components";

const ContainerDefault = styled.div`
  margin: 0 auto;
  width: 660px;

  border: 2px solid #03ff9f;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const Container = ({ id, children }) => {
  return <ContainerDefault id={id}>{children}</ContainerDefault>;
};
