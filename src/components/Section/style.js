import styled from "styled-components";

export const Container = styled.section`
  margin: 3.5rem 0 1.75rem;

  > h2 {
    margin-bottom: 1.75rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
    font-weight: 400;
  }
`