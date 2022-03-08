import React from 'react';
import ProductsPageTitle from './ProductsPageTitle/ProductsPageTitle';
import ProductsList from './ProductsList/ProductsList';
import PriceFilter from './PriceFilter/PriceFilter';
import ResetFilters from './ResetFilters/ResetFilters';
import FavouriteFilter from './FavouritesFilter/FavouritesFilter';
import s from './productsPage.module.css';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleResetFavsClick = this.handleResetFavsClick.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleResetClick() {
        this.props.handleResetClick();
    }

    handleResetFavsClick() {
        this.props.handleResetFavsClick();
    }

    render() {
        return (
            <main>
                <div>
                    <ProductsPageTitle />
                    <div className={s.productsPageContent}>
                        <div className={s.productPageFilterWrapper}>
                            <PriceFilter 
                                minValue={this.props.minValue}
                                maxValue={this.props.maxValue}
                                handleChange={this.handleChange}
                            />
                            <ResetFilters handleClick={this.handleResetClick} />
                            <FavouriteFilter handleClick={this.handleResetFavsClick}/>
                        </div>
                        <ProductsList 
                            data={this.props.filteredProducts}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductsPage;
