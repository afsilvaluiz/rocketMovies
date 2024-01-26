import styled from 'styled-components';

import backgroundImg from '../../layouts/assets/signin.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
`;

export const Form = styled.form`
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  div:nth-child(n + 1) {
    margin-bottom: 0.5rem;
  }

  div:nth-child(5) {
    margin-bottom: 0;
  }

  > button {
    margin-top: 1.5rem;
  }

  > a {
    margin-top: 2.625rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;

export const Background = styled.div`
  flex: 1;
  background:
    linear-gradient(to left, rgba(35, 33, 41, 0.5), rgba(35, 33, 41, 0.3)),
    url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
