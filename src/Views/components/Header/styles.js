import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 7.25rem;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: space-between;

  padding: 0 12.3rem;

  grid-template-columns: 1fr 2fr 1fr;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.STROKE};
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > a > h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    font-weight: 700;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.563rem;

  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  > div {
    margin-right: 0.8rem;
    font-size: 1rem;
    line-height: 1.8rem;

    height: 3rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-size: 0.875rem;
  line-height: 1rem;

  position: absolute;
  bottom: 2.4rem;
  right: 17.6rem;

  &:hover {
    text-decoration: underline;
  }
`;
