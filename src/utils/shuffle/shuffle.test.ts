import shuffle from './'

describe('shuffle', () => {
  it('check length of the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    shuffle(array)
    expect(array).toHaveLength(9)
  })

  it('returns and array with the same elements after being shuffled', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    shuffle(array)
    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
    expect(array).toContain(4)
    expect(array).toContain(5)
    expect(array).toContain(6)
    expect(array).toContain(7)
    expect(array).toContain(8)
    expect(array).toContain(9)
  })
})
