import styled from "styled-components";

export const Container = styled.section`
  margin: 3.5rem 0 1.75rem;

  > h1 {
    margin-bottom: 1.75rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.25rem;
    font-weight: 500;
  }
`;
