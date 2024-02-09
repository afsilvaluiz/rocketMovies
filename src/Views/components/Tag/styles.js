import styled from 'styled-components';

export const Container = styled.span`
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  display: inline-flex;
  align-items: center;
  height: 1.875rem;
  line-height: 1.9rem;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
