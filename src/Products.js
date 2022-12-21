import { useEffect } from 'react';
import React from 'react';
import { fetchProducts } from './actions';
import { connect } from 'react-redux';

const Products = (props) => {
    useEffect(()=>{
        props.fetchProducts(); 
    }, [])   
    console.log(props.products)
    
    const renderList = () => {
        return (
            props.products && props.products.map((product) => {
                return (
                    <div className='col style'>
                        <div key={product.id} className='card'>
                        <div>{product.title}</div>
                        </div>
                    </div>
                    
                );
            })
        );
        
    }
    
    return (
        <div className='row'>
            {renderList()}
        </div>
    );
}

const mapStateToProps = ({Products}) => { 
    return {
        products : Products[0]
    };
}
export default connect(mapStateToProps, {
    fetchProducts : fetchProducts
})(Products);
