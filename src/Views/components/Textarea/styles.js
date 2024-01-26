import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 17.125rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  border-radius: 0.625rem;
  padding: 1.188rem 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
