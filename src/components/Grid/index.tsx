import React, { useEffect, useCallback, FC, Children } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMousetrap from 'react-hook-mousetrap'
import Block from './block'
import { Container, Row } from './style'
import { BLOCK_COORDS, INDEX, NUMBERS, N, GRID } from 'types'
import { REDUCER, createGrid, selectBlock, fillBlock } from 'store/reducers'

const Grid: FC = () => {
  const dispatch = useDispatch()
  const { selectedBlock, selectedValue, solvedGrid } = useSelector<
    REDUCER,
    {
      selectedBlock?: BLOCK_COORDS
      selectedValue: N
      solvedGrid?: GRID
    }
  >(({ selectedBlock, workingGrid, solvedGrid }) => ({
    selectedBlock,
    selectedValue:
      workingGrid && selectedBlock
        ? workingGrid[selectedBlock[0]][selectedBlock[1]]
        : 0,
    solvedGrid,
  }))
  const initGrid = useCallback(() => {
    dispatch(createGrid())
  }, [dispatch])

  useEffect(() => {
    if (!solvedGrid) initGrid()
  }, [initGrid, solvedGrid])

  const fill = useCallback(
    (n: NUMBERS) => {
      if (selectedBlock && selectedValue === 0)
        dispatch(fillBlock(n, selectedBlock))
    },
    [dispatch, selectedBlock, selectedValue]
  )

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
  useMousetrap('1', () => fill(1))
  useMousetrap('2', () => fill(2))
  useMousetrap('3', () => fill(3))
  useMousetrap('4', () => fill(4))
  useMousetrap('5', () => fill(5))
  useMousetrap('6', () => fill(6))
  useMousetrap('7', () => fill(7))
  useMousetrap('8', () => fill(8))
  useMousetrap('9', () => fill(9))
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
