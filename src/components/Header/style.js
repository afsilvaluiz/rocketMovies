import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 7.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.STROKE};

  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 0 7.69rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

  @media (max-width: 40em) {
    grid-template-columns: 2fr 1fr;
    a:first-child {
      display: none;
    }
  }
`
export const Brand = styled.div`
  width: 10.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.625rem 4rem 2.625rem 7.6875rem;

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    font-weight: 700;
  }
`
export const Profile = styled.div`
  justify-self: end;

  padding: 1.5rem 7.6875rem 1.5rem 4rem;

  display: flex;
  gap: 0.563rem;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  };

  > img {
    width: 4rem;
    height: 4rem;
    margin-right: 4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 1.125rem;

    strong {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      background-color: transparent;
      border: none;
      font-size: 0.875rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    button:hover {
      text-decoration: underline;
    }

  }
`

