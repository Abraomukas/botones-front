import React from 'react';

import Product from '../components/Product';
import Title from '../components/Title';
import { ProductConsumer } from '../context';

export default function ProductList() {
	return (
		<main>
			<div className='container-fluid'>
				<Title text='Our products' />
				{/* Product grid */}
				<div className='container'>
					<div className='row '>
						<ProductConsumer>
							{(data) => {
								return data.products.map((product) => {
									return (
										<div className='col-lg-3 col-md-6'>
											<Product key={product.id} product={product} />
										</div>
									);
								});
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</main>
	);
}
