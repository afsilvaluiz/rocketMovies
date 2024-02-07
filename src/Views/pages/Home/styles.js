import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  display: grid;
  grid-template-rows: 6.563rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    width: 100%;
    overflow-y: auto;
    padding: 0 7.688rem;
  }

  .myMovie {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 3.125rem 7.588rem 2.5rem 7.588rem;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  padding: 0 7.588rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

export const Tags = styled.div`
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;

  display: inline-flex;
  align-items: center;
  height: 1.875rem;
  line-height: 1.9rem;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.COLORS.BACKGROUND_1000 : theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.COLORS.BACKGROUND_700 : theme.COLORS.BACKGROUND_1000};
  margin-right: 0.5rem;
`;

export const Content = styled.div`
  max-width: 100%;
  padding: 0 7.688rem;
  overflow-x: hidden;

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

  width: 100%;
  max-width: 12.938rem;
  height: 3rem;

  padding: 0.5rem;
  border-radius: 0.5rem;
`;
