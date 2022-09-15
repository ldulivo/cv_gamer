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
