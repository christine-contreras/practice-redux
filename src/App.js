import React from 'react'
import { useEffect, useState } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'
const API = 'http://localhost:3000/sushis'

function App() {
  const [sushis, setSushis] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API)
      const json = await data.json()
      setSushis(json)
    }

    fetchData().catch(console.error)
  }, [])

  const handleMoreSushiBtnClick = () => {
    const newIndex = sushiIndex + 4
    let startOver = false

    if (newIndex >= sushis.length) startOver = true

    setSushiIndex(startOver ? 0 : newIndex)
  }
  return (
    <div className='App'>
      <SushiContainer
        sushis={sushis.slice(sushiIndex, sushiIndex + 4)}
        handleMoreSushiBtnClick={handleMoreSushiBtnClick}
      />
      <Table />
    </div>
  )
}

export default App
