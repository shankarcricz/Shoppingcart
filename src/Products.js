import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addProducts } from './store';


const Products = () => {
    
    const URL =  'https://fakestoreapi.com/products';
    const products = useSelector(state=> state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const api = async () => {
            const res = await axios.get(URL);
            dispatch(addProducts(res.data));
        }
        api();
        
    }, [])




    const renderList =products[0] && products[0].map((product) => {
        return (
            <div className='col mb-5 style' key={product.id}>
                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">{product.title}</div>
                        <img className="ui avatar image" src={product.image} /> {product.description}
                        <Link to={`/product/${product.id}`} >
                        <h3>Click here to see details</h3>
                        </Link>
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {product.rating && product.rating.rate}
                        </span>
                        <i className="comment icon"></i>
                        {product.rating && product.rating.count} counts
                    </div>
                    
                </div>
            </div>
    );
    });
    return (
        <div className='row mt-5'>
            {renderList}
        </div>
    );
}


export default Products;
