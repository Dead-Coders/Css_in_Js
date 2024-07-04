import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: blue;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  margin-top:30px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
const Navbar = () => {
  return (
    <Button>Thi sis s is</Button>
  )
}

export default Navbar