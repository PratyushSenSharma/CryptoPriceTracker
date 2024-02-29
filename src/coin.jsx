import React from 'react'
import './coin.css';


const coin = ({id, name,image,symbol,price,volume,priceChange, marketCap}) => {
  return (
    <div className='container'>
      <div className='coin-container'>
        <div className='coin-row'>
          <div className='coin'>
            <img src={image} alt='crypto' />
          </div>
          <div className='coin-data'>
            <h2>{name}</h2>
            <div className='coin-data2'>
              <p className='coin-symbol'>{symbol}</p>
              <p className='coin-price'>Rs {price}</p>
              <p className='coin-volume'>Rs {volume.toLocaleString()}</p>
              {priceChange < 0 ? ( <p className='coin-percent red'>{priceChange}%</p>):<p className='coin-percent green'>{priceChange}%</p>}
              <p className='coin-marketcap'>Mkt Cap: Rs {marketCap.toLocaleString()}</p>
            </div>
          </div>
        </div>
  
            
      </div>
    </div>
  )
}

export default coin