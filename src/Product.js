import React,{useState} from 'react'
import "./Product.css";

function Product({ id, product_name, image, price,unit}) {
    const [click, setClick] = useState(false);
    const [count,setCount] = useState(0);

    return (
      <div className="products">
        <div className="product ">
          <div className="image">
            <img src={image} alt=""  />
          </div>          
          <div className="product__info">
            <h3>{product_name}</h3>
            <p>{unit}</p>
            <p className="product__price">
              <small>Tk  </small>
              <strong>{price}</strong>
            </p>

          </div>
          {click===true ? <div className="plus__minus"><button onClick={()=> setCount(count-1)}>-</button> <h3> {count} </h3> <button onClick={()=>setCount(count+1)}>+</button></div>: <button onClick={()=>setClick(true)} > <p> Add to Cart</p></button>}
        </div>
      </div>
  );
}

export default Product
