import React, { useRef, useEffect } from 'react'

import apple from '../../img/object/fruit/apple.png'
import apple1 from '../../img/object/fruit/apple-1.png'
import apple2 from '../../img/object/fruit/apple-2.png'

import sandia from '../../img/object/fruit/sandia.png'
import sandia1 from '../../img/object/fruit/sandia-1.png'
import sandia2 from '../../img/object/fruit/sandia-2.png'

import peach from '../../img/object/fruit/peach.png'
import peach1 from '../../img/object/fruit/peach-1.png'
import peach2 from '../../img/object/fruit/peach-2.png'

import basaha from '../../img/object/fruit/basaha.png'
import basaha1 from '../../img/object/fruit/basaha-1.png'
import basaha2 from '../../img/object/fruit/basaha-2.png'

import banana from '../../img/object/fruit/banana.png'
import banana1 from '../../img/object/fruit/banana-1.png'
import banana2 from '../../img/object/fruit/banana-2.png'

export const Fruit = ({ nameFruit, x, y = -30 }) => {
  const idFruit = useRef()
  let newFruit
  let newFruit1
  let newFruit2

  useEffect(() => {
    idFruit.current.style.left = `${x}px`
    idFruit.current.style.top = `${y}px`
  }, [y])

  switch (nameFruit) {
    case 'sandia':
      newFruit = sandia
      newFruit1 = sandia1
      newFruit2 = sandia2
      break
    case 'peach':
      newFruit = peach
      newFruit1 = peach1
      newFruit2 = peach2
      break
    case 'basaha':
      newFruit = basaha
      newFruit1 = basaha1
      newFruit2 = basaha2
      break
    case 'banana':
      newFruit = banana
      newFruit1 = banana1
      newFruit2 = banana2
      break

    default:
      newFruit = apple
      newFruit1 = apple1
      newFruit2 = apple2
      break
  }

  return (
    (y < 405)
      ? <div
          className='Fruit'
          ref={idFruit}
          >
          <img src={newFruit} alt="fruit" />
        </div>
      : <div
          className='Fruit Fruit-slashed'
          ref={idFruit}
          >
          <img className='left' src={newFruit1} alt="fruit" />
          <img className='right' src={newFruit2} alt="fruit" />
        </div>
  )
}
