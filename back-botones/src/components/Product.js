import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import { ProductConsumer } from '../context';

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;

		return (
			<ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
				<div className='card'>
					<div
						className='p-5'
						onClick={() => {
							console.log('Clicked on the image container!');
						}}>
						<Link to='/details'>
							<img src={img} alt='Product' className='card-img-top' />
						</Link>
						<button
							className='cart-btn'
							disabled={inCart ? true : false}
							onClick={() => {
								console.log('Added to the cart!');
							}}>
							{inCart ? (
								<p className='text-capitalize mb-0' disabled>
									in cart
								</p>
							) : (
								<i className='fas fa-cart-plus' />
							)}
						</button>
					</div>
					<div className='card-footer d-flex justify-content-between'>
						<p className='align-self-center mb-0'>{title}</p>
						<h5 className='text-blue font-italic mb-0'>
							<span className='mr-1'>$</span>
							{price}
						</h5>
					</div>
				</div>
				<h3>Coming soon...</h3>
			</ProductWrapper>
		);
	}
}

const ProductWrapper = Styled.div``;
