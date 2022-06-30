import React, { useEffect, useState } from 'react';
import getProducto from './BaseDatos/base';
import ItemList from './ItemList';
import { Container } from "react-bootstrap";

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../services'

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    getProducto().then(response => {
      setProductos(response);
      //console.log(response);
    })

    const collectionRef = collection(db, '1234')

    console.log("CollectionRef: " + collectionRef)
    getDocs(collectionRef).then(response => {
      console.log("response: " + response)
      console.log("response.docs: " + response.docs)
      const productsFormatted = response.docs.map(doc => {
        console.log("doc: " + doc.getData())
        return { id: doc.id, ...doc.data() }
      })
      console.log("total: " + productsFormatted)
      setProductos(productsFormatted)
    }).finally(() => {
      //setLoading(false)
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


