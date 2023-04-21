import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import './productItem.css';
import { addCart, addProduct, useFetchProductQuery } from "./store";
import { upperCase } from "lodash";
const URL = 'https://fakestoreapi.com/products';

const ProductItem = () => {
    const dispatch = useDispatch();
    // const product = useSelector(state => state.product[0]);
    const { id } = useParams();
    const addToCart = () => {
        dispatch(addCart(product))
    }
    const { data, error, isLoading } = useFetchProductQuery(id);
    dispatch(addProduct(data));
    let product = data
    return (
        <div style={{background:'pink', height:'100vh'}}>
            {product &&
                <div class="container">
                    <div class="cardD">
                        <div class="card-body">
                            <h3 class="card-title">{ upperCase( product.category)}</h3>
                            <h6 class="card-subtitle">{product.title}</h6>
                            <div class="row mt-5">
                                <div class="col-lg-5 col-md-5 col-sm-6" style={{alignSelf:'center'}}>
                                    <div class="white-box text-center"><img src={product.image} class="img-responsive" /></div>
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-6 contentRight">
                                    <h4 class="box-title mt-5">Product description</h4>
                                    <p>{product.description}</p>
                                    <h2 class="mt-5">
                                        ${product.price}<small class="text-success">({Math.round((Math.random(0, 1) * 60))}%off)</small>
                                    </h2>
                                    <button onClick={addToCart} class="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title="" data-original-title="Add to cart">
                                        <i class="fa fa-shopping-cart"></i>
                                    </button>
                                    <Link to={'/cart'}>
                                        <button onClick={addToCart} style={{ marginLeft: '10px' }} class="btn btn-primary btn-rounded">Buy Now</button>

                                    </Link>
                                    <h3 class="box-title mt-5">Key Highlights</h3>
                                    <ul class="list-unstyled">
                                        <li><i class="fa fa-check text-success"></i>Rated {product.rating.rate}/5</li>
                                        <li><i class="fa fa-check text-success"></i>Purchased by {product.rating.count} so far!</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>









            }
        </div>

    );
}
export default ProductItem;