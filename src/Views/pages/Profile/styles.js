import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

    display: flex;
    align-items: center;

    padding: 0 7.75rem;

    > button {
      background: none;
      border: none;

      display: flex;
      align-items: center;

      line-height: 1rem;

      padding-left: 9rem;
      gap: 0.5rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      font-size: 1rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 21.25rem;
  margin: -5.75rem auto 2rem;

  div:nth-child(n + 2) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    margin-bottom: 0.5rem;
  }

  div:nth-child(4) {
    margin-top: 1.5rem;
  }

  div:nth-child(5) {
    margin-bottom: 0;
  }

  > button {
    margin-top: 1.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 2rem;

  width: 11.625rem;
  height: 11.625rem;

  > img {
    width: 11.625rem;
    height: 11.625rem;
    border-radius: 50%;
  }

  > label {
    width: 3rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.438rem;
    right: 0.438rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;
