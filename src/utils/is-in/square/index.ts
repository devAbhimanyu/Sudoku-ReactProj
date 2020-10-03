import { NUMBERS, SQUARE } from 'types'

interface ARGS {
  square: SQUARE
  value: NUMBERS
}

/**
 * A function that returns true if the value is already being used in the current grid square.
 * @param input Object with 3X# Square and value.
 */
const isInSquare = ({ square, value }: ARGS): boolean => {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
