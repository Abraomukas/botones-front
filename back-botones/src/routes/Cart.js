import React from 'react';

import Navbar from '../components/Navbar';
import Title from '../components/Title';
import CartColumns from '../components/cart/CartColumns';
import EmptyCart from '../components/cart/EmptyCart';
import { ProductConsumer } from '../context';

export default function Cart() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<section>
					<ProductConsumer>
						{(product) => {
							const cart = { product };

							if (cart.length > 0) {
								return (
									<React.Fragment>
										<Title text='My cart' />
										<CartColumns />
									</React.Fragment>
								);
							} else {
								return <EmptyCart />;
							}
						}}
					</ProductConsumer>
				</section>
			</main>
		</div>
	);
}
