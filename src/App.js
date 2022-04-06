import React from 'react'
import { useEffect } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'
import { useDispatch } from 'react-redux'
import { updateSushis } from './features/sushis'

const API = 'http://localhost:3000/sushis'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API)
      const json = await data.json()
      dispatch(updateSushis(json))
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <div className='App'>
      <SushiContainer />
      <Table />
    </div>
  )
}

export default App
