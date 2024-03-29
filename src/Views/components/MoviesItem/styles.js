import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none'};

  border-radius: 1rem;
  padding-right: 1rem;

  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > input {
    width: 100%;

    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
