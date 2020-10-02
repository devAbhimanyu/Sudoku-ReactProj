import React, { FC, Children } from 'react'
import Block from './block'
import { Container, Row } from './style'
const Grid: FC = () => {
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => {
          return (
            <Row data-cy="grid-row-container">
              {Children.toArray(
                [...Array(9)].map((_, colIndex) => {
                  return <Block colIndex={colIndex} rowIndex={rowIndex} />
                })
              )}
            </Row>
          )
        })
      )}
    </Container>
  )
}
export default Grid
