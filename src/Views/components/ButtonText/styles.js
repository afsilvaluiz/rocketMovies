import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;

  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
