import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import s from './productsList.module.css';

class ProductsList extends React.Component {
    render() {
        const products = this.props.data.map((product) => {
            return <li key={product.id} id={product.id}>
                <ProductCard
                    isInStock={product.isInStock}
                    img={product.img}
                    likeIcon={product.likeIcon}
                    title={product.title}
                    price={product.price}
                    id={product.id}
                />
            </li>
        });
        
        return (
            <ul className={s.productsList}>
                {products}
            </ul>
        );
    }
}

export default ProductsList;
