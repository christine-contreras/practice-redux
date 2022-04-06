import React from 'react'
import { useSelector } from 'react-redux'

const Table = () => {
  const wallet = useSelector((state) => state.wallet.value)
  const eatenSushis = useSelector((state) => state.eatenSushis.value)

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return (
        <div
          className='empty-plate'
          style={{ top: -7 * index }}
          key={`plate-empty-${index}`}
        />
      )
    })
  }

  return (
    <>
      <h1 className='remaining'>You have: ${wallet} remaining!</h1>
      <div className='table'>
        <div className='stack'>
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(eatenSushis)
          }
        </div>
      </div>
    </>
  )
}

export default Table
