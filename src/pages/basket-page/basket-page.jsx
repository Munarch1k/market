import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './basket-page.css'
import {deleteItemsFromCard} from '../../redux/basket'

export default function BasketPage() {

    const baskets = useSelector (state => state.basket.items)

    const summa_basket = baskets.reduce((sum, items) => sum += items.price, 0)

    const dispatch = useDispatch()

    return (

        <div>
            <h2>Товары:</h2>
             {
                baskets.length ? <div>
                    {
                        baskets.map(item => {
                            return (
                                <div className='basket_items'>
                                    <div>
                                        <div><img src={item.img} alt="" /></div>
                                        <div>
                                            <h1>{item.title}</h1>
                                            <p>цвет:{item.color}</p>
                                            <p>память: {item.storage}</p>
                                            <p>цена:{item.price} сом</p>
                                        </div>
                                    </div>
                                    <button onClick={() => dispatch(deleteItemsFromCard(item.id))}>Удалить из корзины</button>
                                </div>
                            )
                        })
                    }
                </div> : <h1>Корзина пуста</h1>
             }
             <h2>Общая сумма: {summa_basket}</h2>
        </div>
    )
}