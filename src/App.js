import './App.css';
import Product from "./product";
import {useEffect, useState} from "react";
import ProductForm from "./productForm";

function App() {


    const [cart, setCart] = useState([])
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

    const onNewProductHandler = (product) => {
        const newData = [...data];
        newData.push(product);
        setData(newData)
    }

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(response => {
                if (response.ok) {
                return response.json()
                }
                throw new Error(`Unable to get data: ${response.statusText}`)
            })
            .then(json => setData(json))
            .catch((err) => setError(err.message))
            .finally(()=> setIsPending(false))
    }, [])

    const handler = function (product) {
        console.log(product.name + " clicked")
        const newCart = [...cart]
        newCart.push(product);
        console.log(newCart);
        setCart(newCart)
    }

  return (
    <div className="App">
        {<div>{cart.length}</div>}
        {isPending && <div>Loading data...</div>}
        {error && <div>{error}</div>}

        <div style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "5px",
            padding: "5px"
        }}>
        {data.map(item => <Product key={item.id} product={item} onClickHandler={handler}/>)}
        </div>
        <ProductForm onNewProduct={onNewProductHandler}/>
    </div>
  );
}

export default App;
