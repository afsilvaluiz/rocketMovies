import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-radius: 0.625rem;

  > input {
    height: 3.5rem;
    width: 100%;

    padding: 1.188rem 1.5rem;

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
    margin-left: 16px;
  }
`;
