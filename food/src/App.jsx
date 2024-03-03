import React from 'react'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src='Foody Zone.svg' alt='logo' />
        </div>
        <div >
          <input className='search' placeholder='Search Food Here...' />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <FoodCardContainer>
        <FoodCard>

        </FoodCard>
      </FoodCardContainer>
    </Container>
  )
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search{
    color: white;
    font-size: 16px;
    padding: 0 10px;
    background-color: transparent;
    border: 1px solid red;
    border-radius: 5px;
    height: 40px;
    z-index: 400;
  }
`;

const FilterContainer = styled.section`
  height: 4vh;
  padding-bottom: 4px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Button = styled.button`
background-color: #FF4343;
border-radius: 5px;
padding: 4px;
border:none;
color: white;
`;
const FoodCardContainer = styled.section`
  height: 80vh;
  background-image: url('/bg.png');
  background-size: cover;
`;

const FoodCard = styled.div``;
