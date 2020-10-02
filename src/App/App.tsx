import React from 'react'
import { Card, Content, Title, Grid } from '../components'
const App = () => {
  return (
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
  )
}

export default App
