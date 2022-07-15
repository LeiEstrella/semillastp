import React, { useState, useEffect } from 'react';
import { db } from '../services';
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail"
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = (props) => {
    let [productos, setProductos] = useState([])
    let { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, "products", id)
        getDoc(docRef).then(doc =>{
            console.log(doc)
            const productFormatted = { id: doc.id, ...doc.data()}
            setProductos(productFormatted)
        })
    }, [])
    return (
        <Container fluid>
            <ItemDetail product={productos}></ItemDetail>
        </Container>
    );
}

export default ItemDetailContainer