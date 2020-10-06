import React, { useEffect, useCallback, FC, Children } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMousetrap from 'react-hook-mousetrap'
import Block from './block'
import { Container, Row } from './style'
import { BLOCK_COORDS, INDEX } from 'types'
import { REDUCER, createGrid, selectBlock } from 'store/reducers'

const Grid: FC = () => {
  const dispatch = useDispatch()
  const { selectedBlock } = useSelector<
    REDUCER,
    { selectedBlock?: BLOCK_COORDS }
  >((state) => state)
  const initGrid = useCallback(() => {
    dispatch(createGrid())
  }, [dispatch])
  useEffect(() => {
    initGrid()
  }, [initGrid])

  const onMouseUp = () => {
    if (selectedBlock && selectedBlock[0] > 0) {
      const [row, col] = selectedBlock
      dispatch(selectBlock([(row - 1) as INDEX, col]))
    }
  }
  const onMouseDown = () => {
    if (selectedBlock && selectedBlock[0] < 8) {
      const [row, col] = selectedBlock
      dispatch(selectBlock([(row + 1) as INDEX, col]))
    }
  }
  const onMouseLeft = () => {
    if (selectedBlock && selectedBlock[1] > 0) {
      const [row, col] = selectedBlock
      dispatch(selectBlock([row, (col - 1) as INDEX]))
    }
  }
  const onMouseRight = () => {
    if (selectedBlock && selectedBlock[1] < 8) {
      const [row, col] = selectedBlock
      dispatch(selectBlock([row, (col + 1) as INDEX]))
    }
  }

  useMousetrap('up', onMouseUp)
  useMousetrap('down', onMouseDown)
  useMousetrap('left', onMouseLeft)
  useMousetrap('right', onMouseRight)

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => {
          return (
            <Row data-cy="grid-row-container">
              {Children.toArray(
                [...Array(9)].map((_, colIndex) => {
                  return (
                    <Block
                      colIndex={colIndex as INDEX}
                      rowIndex={rowIndex as INDEX}
                    />
                  )
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
