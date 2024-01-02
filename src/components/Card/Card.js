import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <span key={pokemon.name} className="typeName">{type.type.name}</span>
          )
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">高さ</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">重さ</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">アビリティ</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  )
};

export default Card;