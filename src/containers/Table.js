import React from 'react'
import PropTypes from 'prop-types'
const Table = ({ wallet, eatenSushis }) => {
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

Table.propTypes = {
  wallet: PropTypes.number,
  eatenSushis: PropTypes.array,
}
