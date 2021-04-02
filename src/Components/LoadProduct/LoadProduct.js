import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./LoadProduct.css";
import { useHistory } from "react-router";

const LoadProduct = (props) => {
    
    console.log("check", props.event);
    const {_id, name, wight, price, imageURL } = props.event;
    const history = useHistory()
   const handleBuyNow = id => {
     console.log(id);
     const url = `checkout/${id}`
     history.push(url)
   }
    return (

        <div className="container col-md-4">
        <div className="">
        <Card className="custom shadow-sm p-2 m-4 bg-body rounded" style={{ width: '18rem' }}>
            <Card.Img variant="top" className="productImg" src={imageURL} />
            <Card.Body>
                <Card.Title className="App" ><b>{name}</b></Card.Title>
            </Card.Body>
            <div className="row">
                <div className="col-md-6 ">
                    <Card.Text><strong>Price: ${price}</strong> </Card.Text>
                </div>
                <div className="col-md-6 mb-4 App">
                    <Card.Link ><Button onClick={()=>handleBuyNow(_id)} >Buy Now</Button> </Card.Link>
                </div>
            </div>
        </Card>
        </div>
    </div>

    );
};

export default LoadProduct;
