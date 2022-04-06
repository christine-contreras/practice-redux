import React from 'react'
import { useEffect } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateSushis } from '../features/sushis'

const API = 'http://localhost:3000/sushis'

const SushiContainer = () => {
  const dispatch = useDispatch()
  const sushis = useSelector((state) => state.sushis.value)
  const sushiIndex = useSelector((state) => state.sushiIndex.value)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API)
      const json = await data.json()
      dispatch(updateSushis(json))
    }

    fetchData().catch(console.error)
  }, [])

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
