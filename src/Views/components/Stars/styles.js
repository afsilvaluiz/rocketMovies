import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;

  font-size: 1.25rem;
  margin-right: 0.625rem;
  align-items: center;

  line-height: 0;
  list-style: none;

  .bg > svg {
    fill: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  > li > svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;
