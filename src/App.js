import './App.css';
import Product from "./product";
import {useEffect, useState} from "react";

function App() {


    const [cart, setCart] = useState([])
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(response => {
                if (response.ok) {
                response.json()
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
        {cart.length}
        {isPending && "Loading data..."}
        {error && <div>{error}</div>}
        {data.map(item => <Product key={item.id} product={item} onClickHandler={handler}/>)}
    </div>
  );
}

export default App;
