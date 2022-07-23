import React from 'react'
import CoinSearch from '../components/CoinSearch'

function Home(props) {
  return (
    <div>
      <CoinSearch coins={props.coins}/>
    </div>
  ) 
}

export default Home