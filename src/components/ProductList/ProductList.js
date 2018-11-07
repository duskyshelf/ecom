import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import ProductCard from './ProductCard';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('./api/products')
            .then(response => {
                if (response.status >= 400) {
                    return [];
                }
                return response.json();
            })
            .then(products => {
                this.setState({
                    products,
                    loading: false
                });
            });
    }

    renderProducts() {
        return this.state.products.map(product => (
            <ProductCard product={product} key={product.title} />
        ));
    }

    render() {
        return (
            <div className="product-list">
                {this.state.loading || this.state.products.length > 0 ? (
                    this.renderProducts()
                ) : (
                    <div className="products-empty">No Products Found</div>
                )}
            </div>
        );
    }
}
