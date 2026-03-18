import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({cart, loadCart}) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')

    useEffect( () => {
        const getHomeData = async() => {
            let response;
            if (search) {
                response = await axios.get(`/api/products?search=${search}`)
            }else{
                response = await axios.get('/api/products')
            }
            setProducts(response.data)
        }

        getHomeData();
    },[search]);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/images/icons/home-favicon.png" />
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}