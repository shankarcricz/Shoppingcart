import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
    reducerPath: 'products',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://fakestoreapi.com'
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query({
                query : () => {
                    return {
                        url : '/products',
                        method : 'GET'
                    }
                }
            }),
            fetchProduct : builder.query({
                query : (pId) => {
                    return {
                        url : `/products/${pId}`,
                        method : 'GET'
                    }
                }
            }), 
            fetchJewel : builder.query({
                query : () => {
                    return {
                        url : 'products/category/jewelery',
                        method: 'GET'
                    }
                }
            }),
            fetchElectronics : builder.query({
                query : () => {
                    return {
                        url : 'products/category/electronics',
                        method: 'GET'
                    }
                }
            }),
            fetchMens : builder.query({
                query : () => {
                    return {
                        url : "products/category/men's%20clothing",
                        method: 'GET'
                    }
                }
            }),
            fetchWomens : builder.query({
                query : () => {
                    return {
                        url : "products/category/women's%20clothing",
                        method: 'GET'
                    }
                }
            })
        }
    }
})


export const {useFetchProductsQuery, useFetchProductQuery, useFetchJewelQuery, useFetchElectronicsQuery, useFetchMensQuery, useFetchWomensQuery} = productsApi


export {productsApi}