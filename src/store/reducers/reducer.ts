import { AnyAction } from 'redux'
import { GRIDSTATE, GRID } from 'types'
import { createGrid, compareArrays, copyGrid } from 'utils'
import removeNumbers from 'utils/remove-numbers'
import { CREATE_GRID, SELECT_BLOCK, FILL_BLOCK } from './constants'

const initialState: GRIDSTATE = {}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_GRID:
      const solvedGrid = createGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      }
    case FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect Option!')
          return state
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert('Completed!')
        return { ...state, workingGrid: [...state.workingGrid] as GRID }
      }
      return state
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
