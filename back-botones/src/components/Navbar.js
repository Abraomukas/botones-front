import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const links = [
	{ text: 'Products', to: '/products' },
	{ text: 'Press', to: '#!' },
	{ text: 'Contact', to: '#!' },
];

const languages = [
	{ name: 'English', country_code: 'us' },
	{ name: 'Español', country_code: 'es' },
	{ name: 'Deutsch', country_code: 'de' },
	{ name: 'عربي', country_code: 'ae' },
];

const notifications = [
	{ text: 'Some news', to: '#!' },
	{ text: 'Another news', to: '#!' },
	{ text: 'Something else here', to: '#!' },
];

const myProfile = [
	{ text: 'My profile', to: '#!' },
	{ text: 'Settings', to: '#!' },
	{ text: 'Logout', to: '#!' },
];

export default function Navbar() {
	const navigate = useNavigate();
	//TODO Get current Language
	const currentLanguageCode = 'gb';

	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				{/* Wrapper */}
				<div className='container-fluid'>
					{/* Toggle button */}
					<button
						className='navbar-toggler'
						type='button'
						data-mdb-toggle='collapse'
						data-mdb-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<i className='fas fa-bars' />
					</button>

					{/* Collapsible wrapper */}
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<Link className='navbar-brand mt-2 mt-lg-0' to='/'>
							<img
								onClick={() => {
									navigate('/');
									window.scrollTo(0, 0);
								}}
								src='./logo192.png'
								height='50'
								alt='Dilo con Botones logo'
								loading='lazy'
							/>
						</Link>

						{/* Left links */}
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							{links.map(({ text, to, index }) => {
								return (
									<li key={index} className='nav-item'>
										<Link key={index} className='nav-link' to={to}>
											{text}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					{/* Right elements */}
					<div className='d-flex align-items-center'>
						{/* Language selector */}
						<div className='dropdown mx-3'>
							<Link
								className='dropdown-toggle d-flex align-items-center btn btn-dark'
								id='dropdownMenuLanguage'
								role='button'
								data-mdb-toggle='dropdown'
								aria-expanded='false'>
								<i className='fas fa-thin fa-globe' />
							</Link>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuLanguage'>
								{languages.map(({ name, country_code, index }) => {
									return (
										<li key={index}>
											<button
												key={index}
												className='dropdown-item'
												onClick={() => {
													console.log(country_code);
													window.location.reload();
												}}
												disabled={country_code === currentLanguageCode}>
												<div
													key={index}
													dir={country_code !== 'ae' ? 'ltr' : 'rtl'}>
													<span
														key={index}
														style={{
															opacity:
																country_code === currentLanguageCode ? 0.5 : 1,
														}}
														className={`fi fi-${country_code} mx-3`}
													/>
													{name}
												</div>
											</button>
										</li>
									);
								})}
							</ul>
						</div>

						{/* Shopping cart */}
						<Link className='text-reset me-3' to='/cart'>
							<i className='fas fa-shopping-cart' />
						</Link>

						{/* Notifications */}
						<div className='dropdown'>
							<a
								className='text-reset me-3 dropdown-toggle hidden-arrow'
								href='#!'
								id='navbarDropdownMenuLink'
								role='button'
								data-mdb-toggle='dropdown'
								aria-expanded='false'>
								<i className='fas fa-bell' />
								<span className='badge rounded-pill badge-notification bg-danger'>
									3
								</span>
							</a>
							<ul
								className='dropdown-menu dropdown-menu-end'
								aria-labelledby='navbarDropdownMenuLink'>
								{notifications.map(({ text, to, index }) => {
									return (
										<li key={index}>
											<a key={index} className='dropdown-item' href={to}>
												{text}
											</a>
										</li>
									);
								})}
							</ul>
						</div>

						{/* Avatar */}
						<div className='dropdown'>
							<a
								className='dropdown-toggle d-flex align-items-center hidden-arrow'
								href='#!'
								id='navbarDropdownMenuAvatar'
								role='button'
								data-mdb-toggle='dropdown'
								aria-expanded='false'>
								<img
									src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
									className='rounded-circle'
									height='25'
									alt='User portrait'
									loading='lazy'
								/>
							</a>
							<ul
								className='dropdown-menu dropdown-menu-end'
								aria-labelledby='navbarDropdownMenuAvatar'>
								{myProfile.map(({ text, to, index }) => {
									return (
										<li key={index}>
											<a key={index} className='dropdown-item' href={to}>
												{text}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
