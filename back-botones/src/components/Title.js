import React from 'react';

export default function Title(props) {
	return (
		<div className='row'>
			<div className='col-10 mx-auto my-3 text-center'>
				<h1 className='text-capitalize font-weight-bold'>{props.text}</h1>
			</div>
		</div>
	);
}
