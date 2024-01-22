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
  }

  header {
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
  overflow-y: auto;

  padding: 0 7.688rem;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;
