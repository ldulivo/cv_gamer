import React from 'react'
import { Stage1 } from './component/stage1/Stage1'
function App () {
  const body = document.body
  /* window.scrollTo(0, document.body.scrollHeight) */

  /* const logKey = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        console.log('UP')
        break
      case 'ArrowDown':
        console.log('DOWN')
        break
      case 'ArrowLeft':
        console.log('LEFT')
        break
      case 'ArrowRight':
        console.log('RIGHT')
        break

      default:
        console.log(e.key)
        break
    }
  }

  window.addEventListener('keydown', logKey) */
  return (
    <div className='App'>
      <Stage1 body={body} />
    </div>
  )
}

export default App
