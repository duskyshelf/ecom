import React from 'react';
import '../stylesheets/listingPage.scss';
import ProductList from '../components/ProductList';

const HomePage = () => {
    return (
        <main>
            <h1>Listing page</h1>
            <ProductList />
        </main>
    );
};

export default HomePage;
