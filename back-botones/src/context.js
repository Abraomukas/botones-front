import React, { Component } from 'react';

import { Products, ProductDetails } from './tmp/data';

const ProductContext = React.createContext();
//* Provider
//* Consumer

class ProductProvider extends Component {
	state = {
		products: [],
		details: ProductDetails,
	};

	componentDidMount() {
		this.setProducts();
	}

	setProducts = () => {
		let tmpProducts = [];

		Products.forEach((item) => {
			const singleItem = { ...item };
			tmpProducts = [...tmpProducts, singleItem];
		});

		this.setState(() => {
			return { products: tmpProducts };
		});
	};

	getItem = (id) => {
		const product = this.state.products.find((item) => item.id === id);

		return product;
	};

	handleDetail = (id) => {
		const product = this.getItem(id);

		this.setState(() => {
			return { details: product };
		});
	};

	addToCart = (id) => {
		console.log(`Hello from  addToCart! ID is ${id}`);
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
