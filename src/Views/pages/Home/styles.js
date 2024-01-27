import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6.563rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    width: 100%;
    overflow-y: auto;
  }

  .myMovie {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 3.125rem 7.688rem 2.5rem 7.688rem;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  max-width: calc(100% - 1rem);

  padding: 0 7.688rem;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 0.8rem;
  }
`;

export const AddMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  width: 12.938rem;
  height: 3rem;

  padding: 2rem;
  border-radius: 0.5rem;
`;
