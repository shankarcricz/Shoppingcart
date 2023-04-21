import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addProducts, setTab, useFetchElectronicsQuery, useFetchJewelQuery, useFetchMensQuery, useFetchProductsQuery, useFetchWomensQuery } from './store';
import Card from './Card';
import { Link } from 'react-router-dom';
import './product.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuth from './GoogleAuth';





const Products = () => {
    //prouctslice is not being used any more!!
    const selectedTab = useSelector(state => {
        return state.ProductList[0]
    })
    let products;
    const result1 = useFetchProductsQuery()
    const result2 = useFetchElectronicsQuery()
    const result3 = useFetchJewelQuery()
    const result4 = useFetchMensQuery()
    const result5 = useFetchWomensQuery()

    if(selectedTab==='All'){
        products = result1.data
    } else if(selectedTab==='Electronics'){
        products = result2.data
    } else if(selectedTab === 'Jewel') {
        products = result3.data
    } else if (selectedTab === 'Men') {
        products = result4.data
    } else if (selectedTab === 'Women') {
        products = result5.data
    }


    const dispatch = useDispatch()
    const renderList = products && products.map((product) => {
        return (
            <Card product={product} />
        );
    });

    

    return (
        <div style={{background:'pink'}}>
        <div className='container'>
            <a href='https://vibify-eight.vercel.app/'>
          <button class="btn btn-dark redirection" style={{marginLeft:"40%"}}>Checkout my other work (Music Application)</button>
          </a>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" onClick={() => {dispatch(setTab("All"))}}><a className={selectedTab==='All'?'page-link active':'page-link'} href="javascript:void(0);">All</a></li>
                    
                    <li className="page-item" onClick={() => {dispatch(setTab("Jewel"))}} ><a className={selectedTab==='Jewel'?'page-link active':'page-link'} href="javascript:void(0);">Jewellery</a></li>
                    
                    
                    <li className="page-item" onClick={() => {dispatch(setTab("Electronics"))}}><a className={selectedTab==='Electronics'?'page-link active':'page-link'} href="javascript:void(0);">Electronics</a></li>
                    
                    
                    <li className="page-item" onClick={() => {dispatch(setTab("Men"))}}><a className={selectedTab==='Men'?'page-link active':'page-link'} href="javascript:void(0);">Men's clothing</a></li>
                    
                    
                    <li className="page-item" onClick={() => {dispatch(setTab("Women"))}}><a className={selectedTab==='Women'?'page-link active':'page-link'} href="javascript:void(0);">Women's clothing</a></li>
                    
                </ul>
            </nav>
            <div className='row'>
                {renderList}
            </div>
            <GoogleAuth />
        </div>
        </div>
    );
}


export default Products;
