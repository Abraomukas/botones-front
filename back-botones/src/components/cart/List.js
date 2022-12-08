import React from 'react';
import Item from './Item';

export default function List({ data }) {
	const { cart } = data;

	return (
		<div className='container-fluid'>
			{cart.map((item) => {
				return <Item key={item.id} item={item} product={data} />;
			})}
		</div>
	);
}
