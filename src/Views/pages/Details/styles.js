import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100hv;

  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 6.563rem auto;

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 2.5rem 7.6875rem;
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
      margin-bottom: 1.5rem;
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

      > h1 {
        padding-right: 1.188rem;
        font-size: 2.25rem;
        font-weight: 500;
      }
    }
    .movie-info {
      gap: 0.5rem;
      margin: 1.5rem 0rem 0rem;

      p:nth-child(1),
      div {
        width: 12.125rem;
        height: 1.188rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      p:nth-child(2),
      div {
        width: 9.985rem;
        height: 1.188rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          font-size: 1.11rem;
          color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
      }

      img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
    }
  }

  > div:not(:empty) {
    margin: 2.5rem 0;

    ::-webkit-scrollbar {
      height: 5px;
    }
  }

  article {
    width: auto;
    font-size: 1rem;
    text-align: justify;
    line-height: normal;
  }
`;
