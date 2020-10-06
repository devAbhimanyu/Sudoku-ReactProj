import reducer from './reducer'

export type REDUCER = ReturnType<typeof reducer>

export * from './actions'

export default reducer
