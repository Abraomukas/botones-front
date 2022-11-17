import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProductProvider } from './context';
import './index.css';
import App from './App';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ProductProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/products' element={<ProductList />} />
					<Route path='/cart' element={<Cart />} />
					<Route element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ProductProvider>
	</React.StrictMode>
);
