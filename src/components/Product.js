import React from 'react'
import {useState} from 'react'
import SakızImg from '../img/sakız.jpeg' ;
import ekmekImg from '../img/ekmek.jpg';
import './Product.css'

 function Product({money,total,product, basket, setBasket}) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () =>{
      const checkBasket = basket.find(item => item.id === product.id)
      //ürün daha önce eklenmiş
      if(checkBasket){
        checkBasket.amount +=1
        setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

      }else{
        setBasket([...basket,{
          id: product.id,
          amount:1 //başlangıçta bir tane eklensin
        }])
      }
      
    }

    const removeBasket = () =>{
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -=1
         if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
         }else{
          setBasket([...basketWithoutCurrent, currentBasket])
         }
    }


  return (
    <>
    <div className="product">
        <img src={product.image} alt="" />
        <h6>{product.title}</h6>
        <div className="price"> $ {product.price} </div>
        <div className="actions">
            <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
            <span className='amount'>{basketItem && basketItem.amount || 0}</span>
            <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
        </div>
        
    </div>
    </>
  )
}
export default Product