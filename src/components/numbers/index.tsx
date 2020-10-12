import React, { FC } from 'react'
import styled from 'styled-components'
import { NUMBERS } from 'types'
import Button from './Button'

const Container = styled.div`
  display: flex;
  flex-flow: row;
`

const Numbers: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((value) => (
      <Button key={value} value={value} />
    ))}
  </Container>
)

export default Numbers
