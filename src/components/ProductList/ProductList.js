import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import ProductCard from './ProductCard';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch('./api/products')
      .then((response) => {
        if (response.status >= 400) {
          return [];
        }
        return response.json();
      })
      .then((products) => {
        this.setState({ products })
      });
  }

  render() {
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
    )
  }
}