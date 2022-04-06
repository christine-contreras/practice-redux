import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Table = ({ eatenSushis }) => {
  const wallet = useSelector((state) => state.wallet.value)

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
  // wallet: PropTypes.number,
  eatenSushis: PropTypes.array,
}
