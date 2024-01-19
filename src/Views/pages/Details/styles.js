import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "div"
    "content";
  grid-template-rows: 11.6rem 8.5rem auto;

  > div {
    grid-area: div;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(90%, 113.7rem);
    margin: 0 auto;

    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > button:last-of-type {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }
  > main {
    overflow-y: auto;
    width: min(90%, 113.7rem);
    margin: 0 auto;
    padding-right: 1.6rem;
  }
`;

export const Content = styled.div`
  grid-area: content;
  margin: 0 auto 4rem;

  > header {
    margin-bottom: 2.4rem;

    > div {
      display: flex;
      align-items: center;
    }

    > div:first-of-type {
      gap: 1rem;
      margin-bottom: 2.4rem;

      h1 {
        font-size: 2.25rem;
        font-weight: 500;
      }

      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    > div:last-of-type {
      gap: 0.8rem;
      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }
    }
    span {
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
    @media (max-width: 400px) {
      > div:first-of-type {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

  > div:not(:empty) {
    max-width: 100%;
    overflow: auto;
    height: 4rem;
    ::-webkit-scrollbar {
      height: 5px;
    }
  }

  > article {
    margin-top: 4rem;

    p {
      font-size: 1rem;
      text-align: justify;
      line-height: auto;
      margin-bottom: 2.4rem;
    }
  }
`;
