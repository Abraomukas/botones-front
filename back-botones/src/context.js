import React, { Component } from 'react';

import { Products, ProductDetails } from './tmp/data';

const ProductContext = React.createContext();
//* Provider
//* Consumer

class ProductProvider extends Component {
	state = {
		products: [],
		details: ProductDetails,
		cart: [],
		modalIsOpen: false,
		modalProduct: ProductDetails,
		cartSubtotal: 0,
		cartTax: 0,
		cartTotal: 0,
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
		let tmpProducts = [...this.state.products];
		const index = tmpProducts.indexOf(this.getItem(id));
		const product = tmpProducts[index];

		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		this.setState(
			() => {
				return {
					products: tmpProducts,
					cart: [...this.state.cart, product],
					details: { ...product },
				};
			},
			() => {
				this.addTotals();
			}
		);
	};

	openModal = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return { modalProduct: product, modalIsOpen: true };
		});
	};

	closeModal = () => {
		this.setState(() => {
			return { modalIsOpen: false };
		});
	};

	increment = (id) => {
		let tmpCart = [...this.state.cart];
		const selectedProduct = tmpCart.find((item) => {
			return item.id === id;
		});

		const index = tmpCart.indexOf(selectedProduct);
		const product = tmpCart[index];

		product.count += 1;
		product.total += product.count * product.price;

		this.setState(
			() => {
				return { cart: [...tmpCart] };
			},
			() => {
				this.addTotals();
			}
		);
	};

	decrement = (id) => {
		let tmpCart = [...this.state.cart];
		const selectedProduct = tmpCart.find((item) => {
			return item.id === id;
		});

		const index = tmpCart.indexOf(selectedProduct);
		const product = tmpCart[index];

		product.count -= 1;

		if (product.count === 0) {
			this.removeItem(id);
		} else {
			product.total = product.count * product.price;

			this.setState(
				() => {
					return { cart: [...tmpCart] };
				},
				() => {
					this.addTotals();
				}
			);
		}
	};

	removeItem = (id) => {
		let tmpProducts = [...this.state.products];
		let tmpCart = [...this.state.cart];

		tmpCart = tmpCart.filter((item) => {
			return item.id !== id;
		});

		const index = tmpProducts.indexOf(this.getItem(id));
		let removedProduct = tmpProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;

		this.setState(
			() => {
				return { cart: [...tmpCart], products: [...tmpProducts] };
			},
			() => {
				this.addTotals();
			}
		);
	};

	clearCart = () => {
		this.setState(
			() => {
				return { cart: [] };
			},
			() => {
				this.setProducts();
				this.addTotals();
			}
		);
	};

	addTotals = () => {
		let subTotal = 0;
		this.state.cart.forEach((item) => {
			subTotal += item.total;
		});
		const tmpTax = subTotal * 0.1;
		const tax = parseFloat(tmpTax.toFixed(2));
		const total = subTotal + tax;
		this.setState(() => {
			return { cartSubtotal: subTotal, cartTax: tax, cartTotal: total };
		});
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
					clearCart: this.clearCart,
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
