import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

  height: 7rem;
  width: 100%;

  border-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.STROKE};

  display: flex;
  justify-content: space-between;

  padding: 0 7.8rem;

  position: relative;
`

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  > div {
    margin-right: 0.9rem;
    font-size: 1.15rem;
    line-height: 2.8rem;

    height: 4rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-size: 1rem;
  line-height: 1.9rem;

  position: absolute;
  align-items: center;

  bottom: 1.56rem;
  margin-right: 0.3rem;
  right: 12rem;

`