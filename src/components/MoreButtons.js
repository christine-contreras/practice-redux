import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateIndex } from '../features/sushiIndex'

const MoreButtons = () => {
  const dispatch = useDispatch()
  const sushiIndex = useSelector((state) => state.sushiIndex.value)
  const sushis = useSelector((state) => state.sushis.value)

  const handleMoreSushiBtnClick = () => {
    const newIndex = sushiIndex + 4
    let startOver = false

    if (newIndex >= sushis.length) startOver = true
    dispatch(updateIndex(startOver ? 0 : newIndex))
  }

  return <button onClick={handleMoreSushiBtnClick}>More sushi!</button>
}

export default MoreButtons
