import React, { Component } from 'react';

import { Products, ProductDetails } from './tmp/data';

const ProductContext = React.createContext();
//* Provider
//* Consumer

class ProductProvider extends Component {
	state = {
		products: Products,
		details: ProductDetails,
	};

	handleDetail = () => {
		console.log('Hello from  detail!');
	};

	addToCart = () => {
		console.log('Hello from  addToCart!');
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
