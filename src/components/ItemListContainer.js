import React, { useEffect, useState } from 'react';
import getProducto from './BaseDatos/base';
import ItemList from './ItemList';
import { Container } from "react-bootstrap";

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../services'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([])
  const { category } = useParams()

  useEffect(() => {
    const collectionRef = collection(db, "products")
    getDocs(collectionRef).then(res =>{
      console.log(res)
      const ProductList = res.docs.map(doc =>{
        return { id: doc.id, ...doc.data()}
      })
      setProductos(ProductList)
    })
  }, [])

  return (
    <div>
      <section>
        <h1 className="titulo">{mensaje}</h1>
        <Container fluid>
          <ItemList productos={productos} />
        </Container>

      </section>
    </div>
  );
};

export default ItemListContainer;


