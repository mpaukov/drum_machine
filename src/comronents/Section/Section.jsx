import styled from "styled-components";

const SectionDefault = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #0281f8;
  min-height: 100vh;
`;

export const Section = ({ children }) => {
  return <SectionDefault>{children}</SectionDefault>;
};
