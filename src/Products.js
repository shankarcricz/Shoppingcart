import { useEffect } from 'react';
import React from 'react';
import { fetchProducts } from './actions';
import { connect } from 'react-redux';

const Products = (props) => {
    useEffect(() => {
        props.fetchProducts();
    }, [])
    console.log(props.products)

    const renderList = () => {
        return (
            props.products && props.products.map((product) => {
                return (
                    <div className='col mb-5 style' key={product.id}>
                        
                        <div class="ui card">
                            <div class="content">
                                <div class="right floated meta">{product.title}</div>
                                <img class="ui avatar image" src={product.image} /> {product.description}
                            </div>
                            <div class="content">
                                <span class="right floated">
                                    <i class="heart outline like icon"></i>
                                    {product.rating.rate}
                                </span>
                                <i class="comment icon"></i>
                                {product.rating.count} counts
                            </div>
                            
                        </div>
                    
                        
                    </div>


                );
            })
        );

    }

    return (
        <div className='row mt-5'>
            {renderList()}
        </div>
    );
}

const mapStateToProps = ({ Products }) => {
    return {
        products: Products[0]
    };
}
export default connect(mapStateToProps, {
    fetchProducts: fetchProducts
})(Products);
