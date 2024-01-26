import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.5rem 0 2.5rem;

  > h1 {
    margin-bottom: 1.75rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.25rem;
    font-weight: 500;
  }
`;
