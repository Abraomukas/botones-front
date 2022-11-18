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
					</div>
				</div>
				<h3>Coming soon...</h3>
			</ProductWrapper>
		);
	}
}

const ProductWrapper = Styled.div``;
