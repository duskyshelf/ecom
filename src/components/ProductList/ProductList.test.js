import React from 'react';
import ProductList from './ProductList';
import ProductCard from './ProductCard';
import fetch from 'isomorphic-fetch';
import { shallow } from 'enzyme';

jest.mock('isomorphic-fetch', () => () =>
    Promise.resolve({ json: () => [{ title: 1 }] })
);

test('renders 1 ProductCard when API returns a single item', async () => {
    const productList = await shallow(<ProductList />);
    await productList.instance().componentDidMount();
    await productList.update();

    expect(productList.find(ProductCard)).toHaveLength(1);
});
