import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  gap: 2.5rem;

  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 6.563rem auto;

  > main {
    padding: 0 12.938rem;
    overflow-y: auto;

    a {
      margin-bottom: 1.5rem;
    }
    > main::-webkit-scrollbar {
      width: 0.8rem;
    }

    > main::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 0.8rem;
    }
  }
`;

export const Form = styled.form`
  padding-right: 1.5rem;

  > header {
    display: flex;
    flex-direction: column;

    margin-bottom: 2.5rem;

    > h1 {
      font-weight: 500;
      font-size: 2.25rem;
    }
  }

  .movieRating {
    display: flex;
    align-items: flex-end;
    gap: 4rem;

    margin-bottom: 2.5rem;

    .title {
      height: 4rem;
      border-radius: 0.625rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    }

    .rating {
      height: 4rem;
      border-radius: 0.625rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    }
  }

  > Section {
    > h2 {
      font-family: 'Roboto Slab', serif;
      margin-bottom: 1.5rem;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .tags {
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      height: 7rem;
      padding: 1rem;
      border-radius: 0.625rem;
      gap: 1.5rem;
    }

    .tag {
      width: 7.073rem;
    }

    .newTag {
      width: 11.25rem;
    }
  }

  .saveChange {
    display: flex;
    align-items: center;
    gap: 2.5rem;

    > button {
      height: 4rem;
    }

    > button:first-of-type {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;
