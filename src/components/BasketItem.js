import React from 'react'

 function BasketItem({item, product}) {
  return (
    <>
    <li className='basketitem-li'>
      {product.title} x {item.amount}
    </li>
    </>
  )
}

export default BasketItem
