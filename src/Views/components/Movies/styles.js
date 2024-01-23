import styled from 'styled-components';

export const Container = styled.button`
  width: calc(100% - 0.8rem);
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border: none;
  border-radius: 1rem;

  padding: 2rem 2rem;

  margin-bottom: 1.5rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 0.5rem;
  }

  > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin: 1.5rem 0;
    max-height: 5.3rem;

    line-height: 1.9rem;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > footer {
    width: 100%;
    display: flex;
  }
`;
