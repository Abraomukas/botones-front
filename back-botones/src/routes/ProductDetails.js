import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../components/Button';
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
									{/* Details */}
									<div className='row'>
										<div className='col-10 mx-auto col-md-6 my-3'>
											{/* Picture */}
											<img src={img} className='img-fluid' alt={title} />
										</div>
										<div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
											{/* Name */}
											<h2>model: {title}</h2>
											{/* Price */}
											<h4 className='text-blue'>
												<strong>
													price: <span>$</span>
													{price}
												</strong>
											</h4>
											{/* Info */}
											<p className='text-capitalize font-weight-*bold mt-3 mb-0'>
												info:
											</p>
											<p className='text-muted lead'>{info}</p>
											{/* Buttons */}
											<Link to='/products'>
												<ButtonContainer>back to products</ButtonContainer>
												<ButtonContainer disabled={inCart ? true : false}>
													{inCart ? 'in the cart already' : 'add to cart'}
												</ButtonContainer>
											</Link>
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
