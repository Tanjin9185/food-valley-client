import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors, wight, price } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            wight: data.wight,
            price: data.price,
            imageURL: imageURL,
        };
        console.log(data);
        const url = `http://localhost:5000/addEvent`;

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventData),
        }).then((res) => console.log("server side response", res));
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "cc901483d5af9e4fe34505b75ad00754");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Add Product</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Product name</Form.Label>
                    <Form.Control
                        name="name"
                        placeholder="Product Name"
                        ref={register}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Wight</Form.Label>
                    <Form.Control
                        name="wight"
                        placeholder="Product wight"
                        ref={register}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product price</Form.Label>
                    <Form.Control
                        name="price"
                        placeholder="Product price"
                        ref={register}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                        name="exampleRequired"
                        type="file"
                        onChange={handleImageUpload}
                    />
                </Form.Group>
                <input className="btn btn-primary" type="submit" />
            </Form>
        </div>
    );
};

export default AddProduct;
