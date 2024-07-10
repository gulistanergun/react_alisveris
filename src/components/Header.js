import React, { Component } from 'react'

 function Header({total, money}) {
  return (
    <div >

      {total > 0 && money - total !== 0 &&(
        <div className='header'>Harcanabilir  kalan limit {money - total} $</div>
      ) }

      {total === 0 &&(
        <div className='header'>Harcanabilir limit {money - total} $ </div>
      ) }

      {money - total === 0 &&(
        <div className='header'> Kullanbiliabilir limit yetersiz </div>
      ) }

      
    </div>
  )
}

export default Header