import { AnyAction } from 'redux'
import { GRIDSTATE } from 'types'
import { createGrid } from 'utils'
import { CREATE_GRID, SELECT_BLOCK } from './constants'

const initialState: GRIDSTATE = {}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_GRID:
      return {
        ...state,
        grid: createGrid(),
      }
    case SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      }
    default:
      return state
  }
}

export default reducer
