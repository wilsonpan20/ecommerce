import React from 'react'

const Home= () => {
  return (
    <>
    HeroBanner
    <div className='products-heading'>
      <h2>Beset selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div>
      {['Product 1', 'Product 2'].map(
       (product) => product)}
    </div>
    Footer
    </>
  )
}

export default Home