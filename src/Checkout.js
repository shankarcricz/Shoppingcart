import { getByTitle } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import { addCart, getCart, removeItem } from "./actions";
import { useEffect } from "react";

const Checkout = (props) => {
   
    useEffect(()=>{
        props.getCart()
    },[])
    
    const renderList = () => {
        return (
            props.cart && props.cart.map(item => {
               if(item){
                const {category, title, qnty, total, image, id} = item;
                return(
                    
                    <div className="row mb-5 mt-5">
                        <div className="col-2">
                            <img style={{height:'80px', width: '80px'}} src={image} alt='txt' />
                        </div>
                        <div className="col-3">
                            <h5 className="row">{category? category.toUpperCase(): null}</h5>
                            <h4 className="row text-success">{title}</h4>
                        </div>
                        <div className="col-3">
                            ${total}
                        </div>
                        <div className="col-1">
                            <button onClick={()=>props.removeItem({id})} className="danger">Remove</button>
                        </div>
                    </div>
                );
               }
                
            })
        );
    }
    return (
        <div>
            {renderList()}
        </div>
    );
}

const mapToStateProps = ({Cart}) => {
    return {
        cart: Object.values(Cart)
    }
}
export default connect(mapToStateProps, {
    getCart: getCart,
    removeItem: removeItem
})(Checkout);