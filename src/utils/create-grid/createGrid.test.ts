import createGrid from './'

describe('createGrid', () => {
  it('creates a new 9x9 Grid', () => {
    const grid = createGrid()
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })
})
