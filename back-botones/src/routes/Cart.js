import React from 'react';

import Title from '../components/Title';
import Columns from '../components/cart/Columns';
import Empty from '../components/cart/Empty';
import List from '../components/cart/List';
import Totals from '../components/cart/Totals';
import { ProductConsumer } from '../context';

export default function Cart() {
	return (
		<main>
			<section>
				<ProductConsumer>
					{(data) => {
						const { cart } = data;

						if (cart.length > 0) {
							return (
								<React.Fragment>
									<Title text='My cart' />
									<Columns />
									<List data={data} />
									<Totals data={data} />
								</React.Fragment>
							);
						} else {
							return <Empty />;
						}
					}}
				</ProductConsumer>
			</section>
		</main>
	);
}
