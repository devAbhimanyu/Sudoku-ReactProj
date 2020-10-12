import { AnyAction } from 'redux'
import { BLOCK_COORDS, NUMBERS } from 'types'
import { CREATE_GRID, SELECT_BLOCK, FILL_BLOCK } from './constants'
export const createGrid = (): AnyAction => ({ type: CREATE_GRID })

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: FILL_BLOCK,
  value,
})

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: SELECT_BLOCK,
})
