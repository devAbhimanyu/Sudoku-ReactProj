import React from 'react'
import { Card, Content, Title, Grid, NewButton, Numbers } from '../components'
const App = () => {
  return (
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
        <NewButton />
        <Grid />
        <Numbers />
      </Card>
    </Content>
  )
}

export default App
