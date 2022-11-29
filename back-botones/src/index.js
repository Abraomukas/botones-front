import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProductProvider } from './context';
import './index.css';
import App from './App';
import ProductList from './routes/ProductList';
import ProductDetails from './routes/ProductDetails';
import Cart from './routes/Cart';
import NotFound from './routes/NotFound';
import Modal from './components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ProductProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/products' element={<ProductList />} />
					<Route path='/details' element={<ProductDetails />} />
					<Route path='/cart' element={<Cart />} />
					<Route element={<NotFound />} />
				</Routes>
				<Modal />
			</BrowserRouter>
		</ProductProvider>
	</React.StrictMode>
);
