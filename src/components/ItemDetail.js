import React, { useEffect } from 'react';
import { useState, useContext } from 'react'
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';
import CartContext from './Context/CartContext'

const ItemDetail = ({ pro }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {

    setQuantityAdded(quantity)
    pro.cantidad = quantity
    addItem(pro)
  }

  useEffect(() => {
    // console.log(pro);

  }, [])


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"../../" + pro.img} />
      <Card.Body>
        <Card.Title>{pro.titulo}</Card.Title>
        <Card.Text>{pro.descripcion}
        </Card.Text>
        <Card.Text>Precio:${pro.precio}
        </Card.Text>
      </Card.Body>
      <ItemCount stock={pro.cantidad} onAdd={handleOnAdd} />
    </Card>);

}

export default ItemDetail