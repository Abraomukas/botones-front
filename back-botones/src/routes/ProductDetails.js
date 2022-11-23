import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { ProductConsumer } from '../context';

export default class ProductDetails extends Component {
	render() {
		return (
			<div>
				<header>
					<Navbar />
				</header>
				<main>
					<ProductConsumer>
						{(product) => {
							const { id, title, img, price, info, inCart } = product.details;

							return (
								<div className='container py-5'>
									{/* Title */}
									<div className='row'>
										<div className='col-10 mx-auto text-center text-blue my-5'>
											<h1>{title}</h1>
										</div>
									</div>
								</div>
							);
						}}
					</ProductConsumer>
				</main>
			</div>
		);
	}
}
