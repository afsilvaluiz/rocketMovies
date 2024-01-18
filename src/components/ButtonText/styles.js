import styled from "styled-components";


export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`