import React from 'react'
import PropTypes from 'prop-types'
import MoreButton from '../components/MoreButtons'
import Sushi from '../components/Sushi'
const SushiContainer = ({
  sushis,
  handleMoreSushiBtnClick,
  handleEatenSushi,
}) => {
  return (
    <>
      <div className='belt'>
        {sushis.map((sushi) => (
          <Sushi
            sushi={sushi}
            key={`sushi-item-${sushi.id}`}
            handleEatenSushi={handleEatenSushi}
          />
        ))}
        <MoreButton handleMoreSushiBtnClick={handleMoreSushiBtnClick} />
      </div>
    </>
  )
}

export default SushiContainer

SushiContainer.propTypes = {
  sushis: PropTypes.array,
  handleMoreSushiBtnClick: PropTypes.func,
  handleEatenSushi: PropTypes.func,
  // wallet: PropTypes.number,
}
