import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REDUCER, selectBlock } from 'store/reducers'
import { N, INDEX } from 'types'
import Container from './BlockContainer'
interface BlockProps {
  colIndex: INDEX
  rowIndex: INDEX
}

const Block: FC<BlockProps> = ({ colIndex, rowIndex }) => {
  const dispatch = useDispatch()
  const gridState = useSelector<REDUCER, { value: N; isSelected: boolean }>(
    (state) => {
      const { grid, selectedBlock } = state
      const isSelected = selectedBlock
        ? rowIndex === selectedBlock[0] && colIndex === selectedBlock[1]
        : false
      return {
        isSelected,
        value: grid ? grid[rowIndex][colIndex] : 0,
      }
    }
  )
  const clickHandler = () => {
    dispatch(selectBlock([rowIndex, colIndex]))
  }
  return (
    <Container
      data-cy="grid-block"
      onClick={clickHandler}
      active={gridState.isSelected}
    >
      {gridState.value === 0 ? '' : gridState.value}
    </Container>
  )
}
export default Block
