import React from 'react';

import Navbar from '../components/Navbar';
import Title from '../components/Title';
import CartColumns from '../components/CartColumns';

export default function Cart() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<section>
					<Title text='My cart' />
					<CartColumns />
				</section>
			</main>
		</div>
	);
}
