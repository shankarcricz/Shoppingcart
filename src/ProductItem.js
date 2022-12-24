import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProd, removeProd } from "./actions";

const ProductItem = (props) => {
    const [qnty, setQnty] = useState(1);

    const { pid } = useParams();
    useEffect(() => {
        props.fetchProd(pid);
        return () => {
            props.removeProd();
        }

    }, [])
    const { id, title, image, category, price } = props.product;
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
                                                    <button  className="col">-</button>
                                                    <input value={qnty} onChange={(e)=>setQnty(e.target.value)} className="col" type='number' />
                                                    <button  className="col">+</button>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Quantity</p>
                                            <p className="lead fw-normal mb-0">1</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Price</p>
                                            <p className="lead fw-normal mb-0">${price}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-center">
                                        <div>
                                            <p className="small text-muted mb-4 pb-2">Total</p>
                                            <p className="lead fw-normal mb-0">$799</p>
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
                                            className="lead fw-normal">$799</span>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
                            <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );

}

const mapToStateProps = (state) => {
    return {
        product: state.Product,
    }
}
export default connect(mapToStateProps, {
    fetchProd: fetchProd,
    removeProd: removeProd
})(ProductItem);