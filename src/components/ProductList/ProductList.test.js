import React from 'react';
import ProductList from './ProductList';
import ProductCard from './ProductCard';
import fetch from 'isomorphic-fetch';
import { shallow } from 'enzyme';

jest.mock('isomorphic-fetch');

test('renders No Products Found when API returns an empty array', async () => {
    fetch.mockImplementation(() => Promise.resolve({ json: () => [] }));

    const productList = await shallow(<ProductList />);
    await productList.instance().componentDidMount();
    await productList.update();

    expect(productList.find(ProductCard)).toHaveLength(0);
    expect(productList.text()).toBe('No Products Found');
});

test('renders 1 ProductCard when API returns a single item', async () => {
    fetch.mockImplementation(() =>
        Promise.resolve({ json: () => [{ title: 1 }] })
    );

    const productList = await shallow(<ProductList />);
    await productList.instance().componentDidMount();
    await productList.update();

    expect(productList.find(ProductCard)).toHaveLength(1);
});
