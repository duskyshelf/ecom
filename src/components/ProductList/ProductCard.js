import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    const {
        title,
        description,
        priceLabel,
        productLabel,
        currency,
        price,
        image,
        cta,
        ctaLink
    } = product;

    return (
        <div className="product-container">
            <img className="image" src={`/dist${image.path}`} alt={image.alt} />
            <div className="label">{productLabel}</div>
            <h1 className="title">{title}</h1>
            <div className="description">{description}</div>
            <div className="price-marker">
                <span>{priceLabel}</span>
                <span>{`${currency}${price}`}</span>
            </div>
            <a href={ctaLink}>
                <button className="cta">{cta}</button>
            </a>
        </div>
    );
};

ProductCard.defaultProps = {
    products: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.shape({
            path: PropTypes.string,
            alt: PropTypes.string
        }),
        price: PropTypes.number,
        currency: PropTypes.string,
        priceLabel: PropTypes.string,
        productLabel: PropTypes.string,
        cta: PropTypes.string,
        ctaLink: PropTypes.string
    })
};

export default ProductCard;
