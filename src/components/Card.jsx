import React from "react"
import Img from "../images/katie-zaferes.png"
import Star from "../images/star.png"


export default function Card(props) {
    return (
        <div className="card">
            <img src={Img} className="card--image" />
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From £{props.price}</span> / person</p>
        </div>
    )
}