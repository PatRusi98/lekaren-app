import {useState} from "react";
import {Axios} from "axios";

function ProductForm(props) {

    const [productName, setProductName] = useState("")
    const [productImage, setProductImage] = useState("")
    const [productPrice, setProductPrice] = useState()
    const [feedback, setFeedback] = useState()

    const onSubmitHandler = event => {
        event.preventDefault();


        const newProduct = {
            name: productName,
            price: productPrice
        }
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })  .then(response => response.json())
            .then(json => setFeedback(json))
            .finally(()=> {
                props.onNewProduct(newProduct);
                setProductName("");
                setProductImage("");
                setProductPrice();
            });

    }

    return(
        <>
        <form onSubmit={onSubmitHandler}>
            <input type={"text"} value={productName} placeholder={"Product name"} onChange={(e) => setProductName(e.target.value)}/>
            <input type={"text"} value={productImage} placeholder={"Path to image"} onChange={(e) => setProductImage(e.target.value)}/>
            <input type={"number"} value={productPrice} placeholder={"Price"} onChange={(e) => setProductPrice(e.target.value)}/>
            <input type="submit" />
        </form>

    {feedback && <div>{JSON.stringify(feedback)}</div>}

    </>
    )
}

export default ProductForm;