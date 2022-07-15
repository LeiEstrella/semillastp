import React  from 'react';
import { useState, useContext } from 'react'
import { Card } from "react-bootstrap";
import ItemCount from './ItemCount';
import CartContext from './Context/CartContext'

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {

    setQuantityAdded(quantity)
    product.cantidad = quantity
    addItem(product)
  }
  console.log(product)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}
        </Card.Text>
        <Card.Text>Precio:${product.price}
        </Card.Text>
      </Card.Body>
      <ItemCount stock={product.stock} onAdd={handleOnAdd} />
    </Card>);

}

export default ItemDetail