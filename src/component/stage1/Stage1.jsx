import React, { useEffect, useRef, useState } from 'react'
/* import { useFruitProcessing, useNewFruitProcessing } from '../../utils/stage1' */
import { Player } from '../Player'
import { Fruit } from './Fruit'

export const useFruitProcessing = (dataFruit, screenWidth) => {
  // eslint-disable-next-line array-callback-return
  dataFruit.map(function (f, i) {
    if (f.y >= 435) {
      dataFruit[i] = f = {
        nameFruit: useFruitName(),
        x: useFruitRandom(screenWidth),
        y: -30
      }
    } else {
      dataFruit[i] = f = {
        ...f,
        y: f.y + 1
      }
    }
  })
  /* dataFruit[0] = {
    ...dataFruit[0],
    y: dataFruit[0].y + 1
  }
  if (dataFruit[0].y >= 435) {
    dataFruit[0].y = -30
  } */
  /* dataFruit[0].y = 405 */

  return dataFruit
}

export const useNewFruitProcessing = (dataFruit, screenWidth) => {
  /* dataFruit[0] = {
    nameFruit: 'apple',
    x: useFruitRandom(screenWidth),
    y: -30
  } */
  dataFruit = [
    {
      nameFruit: useFruitName(),
      x: useFruitRandom(screenWidth),
      y: -30
    },
    {
      nameFruit: useFruitName(),
      x: useFruitRandom(screenWidth),
      y: -130
    },
    {
      nameFruit: useFruitName(),
      x: useFruitRandom(screenWidth),
      y: -200
    },
    {
      nameFruit: useFruitName(),
      x: useFruitRandom(screenWidth),
      y: -280
    },
    {
      nameFruit: useFruitName(),
      x: useFruitRandom(screenWidth),
      y: -320
    }
  ]

  return dataFruit
}

export const useFruitRandom = (screenWidth) => {
  return (Math.floor(Math.random() * (screenWidth - 50)) + 25)
}

export const useFruitName = () => {
  const name = Math.floor(Math.random() * 5)
  switch (name) {
    case 0:
      return 'sandia'
    case 1:
      return 'peach'
    case 2:
      return 'basaha'
    case 3:
      return 'banana'
    default:
      return 'apple'
  }
}

export const Stage1 = ({ body }) => {
  const ContainerStage1 = useRef()
  const [gameStart, setGameStart] = useState(false)
  const gameStartCheck = useRef(0)
  /* const screenWidth = ContainerStage1.current.clientWidth */
  let screenWidth

  const [run, setRun] = useState(false)
  const [sideLeft, setSideLeft] = useState(false)
  const [clientX, setClientX] = useState({
    boxPosition: -1,
    ScreenPosition: -1
  })
  const [playerX, setPlayerX] = useState(100)
  body.classList.add('stage1')
  const movePixel = 5

  /* const [dataFruit, setDataFruit] = useState([
    {
      nameFruit: 'sandia',
      x: 30,
      y: -30
    },
    {
      nameFruit: 'peach',
      x: 60,
      y: -130
    },
    {
      nameFruit: 'basaha',
      x: 90,
      y: -200
    },
    {
      nameFruit: 'banana',
      x: 120,
      y: -280
    },
    {
      nameFruit: 'apple',
      x: 150,
      y: -320
    }
  ]) */

  const [dataFruit, setDataFruit] = useState([])

  const HandleClickClient = (e) => {
    setClientX({
      boxPosition: e.nativeEvent.layerX,
      ScreenPosition: e.clientX
    })
  }

  useEffect(() => {
    if (clientX.ScreenPosition < 0) {
      setPlayerX(100)
      /* screenWidth = ContainerStage1.current.clientWidth */
      /* setDataFruit([
        {
          nameFruit: 'apple',
          x: (Math.floor(Math.random() * (ContainerStage1.current.clientWidth - 50)) + 25),
          y: -30
        }
      ]) */
      return
    }

    setGameStart(0)

    if (playerX < clientX.boxPosition) {
      setRun(true)
      setSideLeft(false)
      return setPlayerX(playerX + movePixel)
    }
    if (playerX > clientX.boxPosition) {
      setRun(true)
      setSideLeft(true)
      return setPlayerX(playerX - movePixel)
    }
  }, [clientX])

  useEffect(() => {
    if (clientX.ScreenPosition < 0) {
      return
    }
    const runPlayer = setInterval(() => {
      if (playerX >= clientX.boxPosition - movePixel && playerX <= clientX.boxPosition + movePixel) {
        console.log('borrar')
        clearInterval(runPlayer)
        setRun(false)
        return
      }
      if (playerX < clientX.boxPosition) {
        console.log('agregar ++')
        console.log(clientX.boxPosition, playerX)
        return setPlayerX(playerX + movePixel)
      }
      if (playerX > clientX.boxPosition) {
        console.log('menos --')
        console.log(clientX.boxPosition, playerX)
        return setPlayerX(playerX - movePixel)
      }
    }, 10)
    return () => clearInterval(runPlayer)
  }, [playerX])

  useEffect(() => {
    if (gameStartCheck.current < 2) {
      gameStartCheck.current += 1
      return
    }
    if (dataFruit.length > 0) {
      const runFruit = setInterval(() => {
        screenWidth = ContainerStage1.current.clientWidth
        setGameStart(gameStart + 1)
        setDataFruit(useFruitProcessing(dataFruit, screenWidth))
      }, 20)
      return () => clearInterval(runFruit)
    } else {
      screenWidth = ContainerStage1.current.clientWidth
      setDataFruit(useNewFruitProcessing(dataFruit, screenWidth))
      setGameStart(gameStart + 1)
    }
  }, [gameStart])

  useEffect(() => {
    /* console.log('df', dataFruit)
    console.log('ContainerStage1', Math.floor(Math.random() * (ContainerStage1.current.clientWidth - 50))) */
  }, [dataFruit])

  return (
    <div
      className="container"
      onMouseUp={HandleClickClient}
      ref={ContainerStage1}
      >
      <Player
        run={run}
        sideLeft={sideLeft}
        playerX={playerX}
        />
      {
        /* (dataFruit.length > 0)
          ? <Fruit
              nameFruit={dataFruit[0].nameFruit}
              x={dataFruit[0].x}
              y={dataFruit[0].y}
              screenWidth={screenWidth}
              />
          : null */
        /* (dataFruit.length > 0)
          ? (dataFruit.map((f, i) =>
            // eslint-disable-next-line react/jsx-key
            <Fruit
              key={i}
              nameFruit={f.nameFruit}
              x={f.x}
              y={f.y}
              />))
          : null */
          (dataFruit.map((f, i) =>
            // eslint-disable-next-line react/jsx-key
            <Fruit
              key={i}
              nameFruit={f.nameFruit}
              x={f.x}
              y={f.y}
              />))
      }
    </div>
  )
}
