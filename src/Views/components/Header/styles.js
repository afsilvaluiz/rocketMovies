import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 6.563rem;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: space-between;

  padding: 0 7.6875rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.STROKE};

  > div:first-of-type {
    > h1 {
      font-size: 1.5rem;
      padding-right: 4rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > a > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
    padding-left: 4rem;
    line-height: 1.5rem;
    font-size: 1rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  margin-right: 2rem;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`;
