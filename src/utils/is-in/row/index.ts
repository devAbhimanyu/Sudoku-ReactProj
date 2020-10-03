import { GRID, NUMBERS } from 'types'

interface ARGS {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * A function that returns true if the value is already being used in the current grid row.
 * @param input Object with 9x9 Sudoku Grid, row index and value
 */
const isInRow = ({ grid, row, value }: ARGS): boolean => {
  return grid[row].includes(value)
}

export default isInRow
