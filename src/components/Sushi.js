import React from 'react'
import { useState } from 'react'

import PropTypes from 'prop-types'
const Sushi = ({ sushi }) => {
  const [sushiEaten, setSushiEaten] = useState(false)
  return (
    <>
      <div className='sushi'>
        <div
          className='plate'
          onClick={() => setSushiEaten((prevEaten) => !prevEaten)}>
          {sushiEaten ? null : <img src={sushi.img_url} width='100%' />}
        </div>
        <h4 className='sushi-details'>
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    </>
  )
}

export default Sushi

Sushi.propTypes = {
  sushi: PropTypes.object,
}
