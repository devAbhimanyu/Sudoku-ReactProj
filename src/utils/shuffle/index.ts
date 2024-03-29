/**
 * Array shuffle using FIsher-Yates shuffle algo
 * @param arr array to be shuffled
 */
const shuffle = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

export default shuffle
