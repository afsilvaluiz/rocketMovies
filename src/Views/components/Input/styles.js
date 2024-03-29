import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 0.625rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > input {
    height: 3.438rem;
    width: 100%;

    padding: 1.1875rem 0 1.1875rem 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > input:ready-only {
      cursor: not-allowed;
    }
  }
  svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
