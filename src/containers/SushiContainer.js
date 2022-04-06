import React from 'react'
import MoreButton from '../components/MoreButtons'
import Sushi from '../components/Sushi'
import { useSelector } from 'react-redux'

const SushiContainer = () => {
  const sushis = useSelector((state) => state.sushis.value)
  const sushiIndex = useSelector((state) => state.sushiIndex.value)

  return (
    <>
      <div className='belt'>
        {sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => (
          <Sushi sushi={sushi} key={`sushi-item-${sushi.id}`} />
        ))}
        <MoreButton />
      </div>
    </>
  )
}

export default SushiContainer
