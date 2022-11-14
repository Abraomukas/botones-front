import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';

import Navbar from './components/Navbar';

function App() {
	return (
		<React.Fragment>
			<header>
				<Navbar />
			</header>
		</React.Fragment>
	);
}

export default App;
