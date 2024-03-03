import React from 'react'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src='Foody Zone.svg' alt='logo' />
        </div>
        <div className='search'>
          <input placeholder='Search Food Here...' />
        </div>
      </TopContainer>
    </Container>
  )
}

export default App;

const Container = styled.div``;
const TopContainer = styled.section``;