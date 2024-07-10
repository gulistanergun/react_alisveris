import React from 'react'
import BasketItem  from './BasketItem';
import './Basket.css';

 function Basket({resetBasket,basket, total,products}) {
  return (
    <>
      <div className='basket-container container'>
        <h3>Alişveriş Detayları</h3>
      {basket.map(item => (
              <BasketItem item={item} product={products.find(p => p.id === item.id)}/>
          ))}

          <div className='total'>
              Toplam: ${total}
          </div>
          <button className='sepetclear' onClick={resetBasket}>Sepeti Sıfırla</button>
        </div>
    </>
  )
}

export default Basket
