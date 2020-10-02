import styled, { css } from 'styled-components'

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: 0;
    text-align: center;
  `}
`
export default Title
