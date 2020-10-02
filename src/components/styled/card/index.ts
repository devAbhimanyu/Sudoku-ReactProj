import styled, { css } from 'styled-components'

const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    max-height: fit-content;
    padding: 15px;
  `}
`
export default Card
