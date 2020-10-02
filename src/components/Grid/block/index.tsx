import React, { FC } from 'react'
import Container from './BlockContainer'
interface BlockProps {
  colIndex: number
  rowIndex: number
}

const Block: FC<BlockProps> = ({ colIndex, rowIndex }) => {
  return <Container data-cy="grid-block" />
}
export default Block
