import React from "react"
import { datas } from '../../data'
import Items from '../../components/items/items'
import './home-page.css'
import Nav from '../../components/header/nav'

export default function HomePage() {
    return (
        <div>
            <div className="nav">
                <Nav />
            </div>
            <div className="item_container">
                {
                    datas.map(el => <Items item={el} />)
                }
            </div>
        </div>
    )
}