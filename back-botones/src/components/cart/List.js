import React from 'react';
import Item from './Item';

export default function List({ data }) {
	const { cart } = data;
	console.log("D - ", data);
	console.log("C - ", cart);

	return (
		<div className='container-fluid'>
			{data.products.map((item) => {
				return <Item key={item.id} item={item} product={data} />;
			})}
		</div>
	);
}
