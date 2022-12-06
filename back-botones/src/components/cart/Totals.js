import React from 'react';

export default function Totals({ data }) {
	const { cartSubtotal, cartTax, cartTotal, clearCart } = data;

	return (
		<React.Fragment>
			<div className='container'>
				<div className='row'></div>
			</div>
		</React.Fragment>
	);
}
