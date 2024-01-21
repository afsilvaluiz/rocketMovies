import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 9.6rem auto;

  > main {
    overflow-y: auto;
    width: min(90%, 113.7rem);
    margin: 0 auto;
    padding-right: 1.6rem;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > header {
    > div:first-of-type {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 2.4rem;
      align-items: center;

      > button:last-of-type {
        align-self: auto;
        color: ${({ theme }) => theme.COLORS.ROSE};

        svg {
          color: ${({ theme }) => theme.COLORS.ROSE};
        }
      }
    }
  }

  > section {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
    }

    > div:first-of-type {
      align-items: center;
      margin-bottom: 2.4rem;
      gap: 1rem;

      > h1 {
        font-size: 2.25rem;
        font-weight: 500;
      }
    }

    .movie-info {
      gap: 0.8rem;
      margin-bottom: 2rem;

      > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }

      span {
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
      }
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

  article p {
    font-size: 1rem;
    text-align: justify;
    line-height: auto;
  }

  > div:not(:empty) {
    max-width: 100%;
    overflow: auto;
    height: 4rem;
    ::-webkit-scrollbar {
      height: 5px;
    }
  }
`;
