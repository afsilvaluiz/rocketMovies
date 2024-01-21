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
    grid-area: content;
    overflow-y: auto;

    width: 100%;
    max-width: 95rem;
    margin: 0 auto;
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
      gap: 0.5rem;

      > h1 {
        padding-right: 1rem;
        font-size: 2.25rem;
        font-weight: 500;
      }
    }
    .movie-info {
      gap: 0.8rem;
      margin: 2rem 0rem;

      p:nth-child(1),
      div {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      }
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
