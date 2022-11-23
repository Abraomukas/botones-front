import React from 'react';

import Navbar from '../components/Navbar';
import Title from '../components/Title';

export default function Cart() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Title text='My cart' />
				<section>
					<h3>Coming soon...</h3>
				</section>
			</main>
		</div>
	);
}
