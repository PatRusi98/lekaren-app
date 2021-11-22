import {useState} from "react";

function Product({product, onClickHandler}) {

    const [isInCart, setIsInCart] = useState(false)

    return (
        <div>
            <h2>{product.name}</h2>
            <div>{product.price} $</div>
            <div>{isInCart && "In cart"}</div>
            <button onClick={() =>{
                setIsInCart(true);
                onClickHandler(product)
            }}>Buy</button>
        </div>
    )
}

export default Product;

