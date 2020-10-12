import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { Button } from 'components'
import { fillBlock, REDUCER } from 'store/reducers'
import { BLOCK_COORDS, N, NUMBERS } from 'types'

interface Props {
  value: NUMBERS
}

const NumberButton: FC<Props> = ({ value }) => {
  const state = useSelector<
    REDUCER,
    { selectedBlock?: BLOCK_COORDS; selectedValue: N }
  >(({ selectedBlock, workingGrid }) => ({
    selectedBlock,
    selectedValue:
      workingGrid && selectedBlock
        ? workingGrid[selectedBlock[0]][selectedBlock[1]]
        : 0,
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0)
      dispatch(fillBlock(value, state.selectedBlock))
  }, [dispatch, state.selectedBlock, state.selectedValue, value])

  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
