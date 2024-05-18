import React from "react"
import './items.css'
import { useSelector, useDispatch} from 'react-redux'
import { deleteItemsFromCard , addItemToCard } from "../../redux/basket"
import Button from "../button/button"
import { useNavigate } from "react-router-dom"

export default function Items ({item}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const basket = useSelector(state => state.basket.items)
    const isBasket = basket.some(data => data.id == item.id)

    const handleClick = () => {
        if (isBasket){
            dispatch(deleteItemsFromCard(item.id))
        } else {
            dispatch(addItemToCard(item))
        }
    }

    return (
        <div className="items_container">
            <div onClick={() => navigate(`/details/${item.id}`)}><img src={item.img} alt="" /></div>
            <p>{item.title}</p>
            <h1>{item.price} сом</h1>
            <Button 
                type={isBasket ? 'secondary' : 'primary'}
                    onClick={handleClick}>{isBasket ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    )
}