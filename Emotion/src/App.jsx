import { css } from '@emotion/css'
import Navbar from './Navbar'
const color = 'black'
const App = () => {
  return (
    <>
   <div
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}>
    Hover to change color.
  </div>

  <Navbar></Navbar>
  </>
  )
}

export default App
