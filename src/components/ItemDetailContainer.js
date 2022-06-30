import React, { useState, useEffect } from 'react';
import { db } from '../services';
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = (props) => {
    let [pro, setPro] = useState({})
    let [productos, setProductos] = useState([])
    let { id } = useParams();

    useEffect(() => {

        setProductos(db);
        let found = db.filter(x => x.id === id)
        setPro(found[0])

        //console.log(response);

    }, [])

    return (
        <Container fluid>
            <ItemDetail pro={pro}></ItemDetail>
        </Container>
    );
}

export default ItemDetailContainer