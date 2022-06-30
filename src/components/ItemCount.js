import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, onAdd }) => {
    let [valor, setValor] = useState(0)
    const onAddPlus = () => {
        console.log("value " + stock)
        if (valor < stock) {
            setValor(valor + 1)
        }
    }
    const onSubstract = () => {
        if (valor > 0) {
            setValor(valor - 1)
        }
    }

    return (
        <Card.Text>
            <span>Cantidad: {valor + " "}</span>
            <Button onClick={() => onAddPlus()}>+</Button> &nbsp;
            <Button onClick={() => onSubstract()}>-</Button>
            <Button onClick={() => onAdd(valor)}>Agregar al carrito</Button>
            <br />
            {valor !== 0 ?
                <Link to='/cart'>Terminar compra</Link> :
                <></>
            }
        </Card.Text>);

}

export default ItemCount