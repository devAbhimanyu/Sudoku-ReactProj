import { GRID, NUMBERS } from 'types'

interface ARGS {
  col: number
  grid: GRID
  value: NUMBERS
}

/**
 * A function that returns true if the value is already being used in the current grid column.
 * @param input Object with 9X9 Sudoku Grid, column index and value.
 */
const isInCol = ({ col, grid, value }: ARGS): boolean => {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true
  }
  return false
}

export default isInCol
