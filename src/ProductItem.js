import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart, fetchProd, removeProd } from "./actions";

const ProductItem = (props) => {

    const [qnty, setQnty] = useState(1);
    const {id, image, category, title, price} = props.product? props.product : {id : 1,image : '',
        category:'',
        title:'',
        price:''
}
    

    const formsubmit = () => {
        const prod = props.product
        prod.qnty = qnty
        prod.total = price*qnty
        props.addCart(prod)
    }
    const less = () => {
        if(qnty==1) return
        setQnty(qnty-1);
    }
    const more = () => {
        setQnty(qnty+1);
    }

    const { pid } = useParams();
    useEffect(() => {
        props.fetchProd(pid);
        return () => {
            props.removeProd()
        }
    }, [])
    
    return (
        <section className="vh-100" >
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <p><span className="h2"> {category}</span><span className="h4"></span></p>

                        <div className="card mb-4">
                            <div className="card-body p-4">

                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img src={image}
                                            className="img-fluid" alt="Generic placeholder image" />
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Name</p>
                                            <p className="lead fw-normal mb-0">{title}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Qnty</p>
                                            <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2"></i>
                                                <div className="row">
                                                    <button onClick={less} className="col">-</button>
                                                    <input value={qnty} onChange={(e)=>setQnty(e.target.value)} className="col" type='number' />
                                                    <button onClick={more}  className="col">+</button>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Quantity</p>
                                            <p className="lead fw-normal mb-0">{qnty}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Price per item</p>
                                            <p className="lead fw-normal mb-0">${price}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Total</p>
                                            <p  className="lead fw-normal mb-0">${price * qnty}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card mb-5">
                            <div className="card-body p-4">

                                <div className="float-end">
                                    <p className="mb-0 me-5 d-flex align-items-center">
                                        <span className="small text-muted me-2">Order total:</span> <span
                                            className="lead fw-normal">${price*qnty}</span>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <Link to={'/products'}>
                                <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
                            </Link>
                            
                            <Link to={'/check-out'}>
                            <button onClick={()=>formsubmit()} type="button" className="btn btn-primary btn-lg">Add to cart</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );

}

const mapToStateProps = ({Product}) => {  
    return {
        product: Object.values(Product)[0]
            
    }
}
export default connect(mapToStateProps, {
    fetchProd: fetchProd,
    removeProd: removeProd,
    addCart: addCart
})(ProductItem);