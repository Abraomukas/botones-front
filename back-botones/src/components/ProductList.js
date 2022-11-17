import React from 'react';
import Navbar from './Navbar';

import Product from './Product';
import Title from './Title';

export default function ProductList() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Title text='Our products' />
				{/* Product grid */}
				<div className='container'>
					<div className='row '>
						<div className='col-lg-3 col-md-6'>
							<Product />
						</div>

						<div className='col-lg-3 col-md-6'>
							<Product />
						</div>

						<div className='col-lg-3 col-md-6'>
							<Product />
						</div>

						<div className='col-lg-3 col-md-6'>
							<Product />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
