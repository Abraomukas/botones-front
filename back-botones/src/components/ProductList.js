import React from 'react';
import Navbar from './Navbar';

import Product from './Product';

export default function ProductList() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
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
