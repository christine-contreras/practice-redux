import React from 'react'

const Table = () => {
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
      <h1 className='remaining'>
        You have: ${/* Give me how much money I have left */} remaining!
      </h1>
      <div className='table'>
        <div className='stack'>
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates([])
          }
        </div>
      </div>
    </>
  )
}

export default Table
