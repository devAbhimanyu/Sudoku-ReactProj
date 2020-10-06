import { AnyAction } from 'redux'
import { BLOCK_COORDS } from 'types'
import { CREATE_GRID, SELECT_BLOCK } from './constants'
export const createGrid = (): AnyAction => ({ type: CREATE_GRID })

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: SELECT_BLOCK,
})
