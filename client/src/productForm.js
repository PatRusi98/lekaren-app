import {useEffect, useState} from "react";
/*import {Axios} from "axios";*/
import axios, * as others from 'axios';


function ProductForm(props) {

    const [productName, setProductName] = useState("")
    const [productImage, setProductImage] = useState("")
    const [productPrice, setProductPrice] = useState()
    const [feedback, setFeedback] = useState()
    const [productList, setProductList] = useState([]);

    const onSubmitHandler = event => {
        event.preventDefault();
        const newProduct = {
            /*productName: productName,
            productPrice: productPrice,
            productImage: productImage*/
            productName: 'productName',
            productPrice: 69.69,
            productImage: 'productImage'
        }

       /* fetch('http://localhost:3001/api/insert', {
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
            });*/

        const submitProduct = () => {
            axios.post("http://localhost:3001/api/insert", {
                body: JSON.stringify(newProduct)
            }) .then(response => response.json())
                .then(json => setFeedback(json))
                .finally(()=> {
                    props.onNewProduct(newProduct);
                    setProductName("");
                    setProductImage("");
                    setProductPrice();
            });
        };

    }

    useEffect(()=> {
        axios.get("http://localhost:3001/api/get").then((response)=> {
            console.log(response.data);
        });
    }, []);

    return(
        <>
        <form onSubmit={onSubmitHandler}>
            <input type={"text"} value={productName} placeholder={"Product name"} onChange={(e) => setProductName(e.target.value)}/>
            <input type={"text"} value={productImage} placeholder={"Path to image"} onChange={(e) => setProductImage(e.target.value)}/>
            <input type={"number"} step={0.01} value={productPrice} placeholder={"Price"} onChange={(e) => setProductPrice(e.target.value)}/>
            <input type="submit" />
        </form>

    {feedback && <div>{JSON.stringify(feedback)}</div>}
            {productList.map((val) => {
                return <h1>Product: {val.productName} && Price: {val.productPrice}</h1>
            })}

    </>
    )
}

export default ProductForm;