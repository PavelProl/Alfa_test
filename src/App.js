import React from 'react';
import ProductsPage from './components/ProductsPage/ProductsPage';
import data from './products.json';
import getMinValue from './utils/getMinValue'
import getMaxValue from './utils/getMaxValue';
import getFilteredProducts from './utils/getFilteredProducts';

const CardContext = React.createContext({
  handleCloseCardClick: () => {},
  handleSelectFavourites: () => {},
  handleShowFavourites: () => {}
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleResetFavsClick = this.handleResetFavsClick.bind(this);
    this.handleCloseCardClick = this.handleCloseCardClick.bind(this);
    this.handleSelectFavourites = this.handleSelectFavourites.bind(this);
    this.handleShowFavourites = this.handleShowFavourites.bind(this);

    this.state = {
      minValue: getMinValue(data),
      maxValue: getMaxValue(data),
      favourites: [],
      cardsToClose: [],
      isChecked: false
    }
  }

  handleChange(event) {
    if (event.target.value === '') {
      this.setState({
          [event.target.name]: event.target.value
      }); 
    } else {
      this.setState({
        [event.target.name]: parseInt(event.target.value)
      }); 
    }
  }

  // при сбросе фильтров избранное остается
  handleResetClick() {
    this.setState({ minValue: getMinValue(data),
                    maxValue: getMaxValue(data),
                    cardsToClose: []
    });
  }

  // сброс избранного
  handleResetFavsClick() {
    if (this.state.isChecked) {
      this.setState({ favourites: [], isChecked: false });
    } else {
      this.setState({ favourites: [] });
    }
  }

  handleShowFavourites() {
    if (this.state.favourites.length === 0) { 
    }
    this.setState({isChecked: !this.state.isChecked});
  }

  handleSelectFavourites(e) {
    const favCardId = parseInt(e.target.id);
    const { favourites } = this.state;
    let selected = [];

    if (favourites.includes(favCardId) && favourites.length === 1) {
      selected = [];
    } else if (favourites.includes(favCardId)) {
      selected = favourites.filter((item => item !== favCardId));
    } else {
      selected = [...favourites, favCardId];
    }

    this.setState({ favourites: selected });
  }

  handleCloseCardClick(e) {
    const selectedCardId = parseInt(e.target.id);
    const { cardsToClose } = this.state;
    let selected = [];

    selected = [...cardsToClose, selectedCardId];

    this.setState({ cardsToClose: selected });
  }

  render() {
    const {minValue, maxValue, cardsToClose, favourites, isChecked} = this.state;
    const filteredProducts = getFilteredProducts(data, minValue, maxValue, cardsToClose, favourites, isChecked);

    // временные логи
    console.log("filtered", filteredProducts);
    console.log("cardsToClose", cardsToClose);
    console.log("favs", favourites);

    return (
      <CardContext.Provider value={{
        ...this.state,
        handleCloseCardClick: this.handleCloseCardClick,
        handleSelectFavourites: this.handleSelectFavourites,
        handleShowFavourites: this.handleShowFavourites}}>
          <ProductsPage 
            filteredProducts={filteredProducts}
            minValue={minValue}
            maxValue={maxValue}
            handleResetClick={this.handleResetClick}
            handleResetFavsClick={this.handleResetFavsClick}
            handleChange={this.handleChange}
          />
      </CardContext.Provider>
    );
  }
}

export { App, CardContext };
