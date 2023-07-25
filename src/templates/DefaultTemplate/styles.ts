import { styled } from "styled-components";

export const DefaultTemplateStylized = styled.div`
  display: grid;
  grid-template-areas: "HD" "CT";
  grid-template-rows: 80px auto;
  height: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-area: CT;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 80px;
`;
