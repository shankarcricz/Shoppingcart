import React, { useRef } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = ({product}) => {

    return (
        

        <div className="col-2 card d-flex">
            <Link style={{"text-decoration":"none","color":"black"}} to={`/product/${product.id}`} >
            <img className="img-fluid" src={product.image} />
            <h5 className="style1"><em>{product.title}</em></h5>
            <h6 className="style2"><em>${product.price}</em></h6>
            </Link>
        </div>
       
        
    );
}
export default Card;