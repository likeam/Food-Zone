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

const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
`;
const TopContainer = styled.section``;