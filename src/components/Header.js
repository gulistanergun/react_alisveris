import React, { Component } from 'react'
import './Header.css'

 function Header({total, money}) {
  return (
    < >

      {total > 0 && money - total !== 0 &&(
        <div className="header">Harcanabilir  kalan limit <span>{money - total}</span>  $</div>
      ) }

      {total === 0 &&(
        <div className="header">Harcanabilir limit <span>{money - total}</span>  $ </div>
      ) }

      {money - total === 0 &&(
        <div className="header"> Kullanbiliabilir limit yetersiz </div>
      ) }

      

    </>
  )
}

export default Header