import './App.css'
import styled from 'styled-components'

function App() {
  const Button = styled.button`
  color: grey;
  background-color: red;

  &:hover{
  opacity: 0.3;
  background-color: blue;
  }
`;

 
  return (
    <>
     <Button>helloo</Button>
    </>
  )
}

export default App
