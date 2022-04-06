import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Sushi = ({ sushi, handleEatenSushi }) => {
  const wallet = useSelector((state) => state.wallet.value)

  const [sushiEaten, setSushiEaten] = useState(false)

  const handleSushiClick = () => {
    if (!sushiEaten && wallet >= sushi.price) {
      setSushiEaten((prevEaten) => !prevEaten)
      handleEatenSushi(sushi)
    } else {
      alert('not enough money in your wallet')
    }
  }
  return (
    <>
      <div className='sushi'>
        <div className='plate' onClick={handleSushiClick}>
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
  handleEatenSushi: PropTypes.func,
  // wallet: PropTypes.number,
}
