import styled from 'styled-components'

export const Container = styled.span`
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;
  padding: 0.313rem 0.875rem;
  border-radius: 0.313rem;
  margin-right: 0.375rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  min-width: 6.4rem;

  &:last-of-type {
    margin-right: 0;
  }
`