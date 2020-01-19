import React from "react";
import './Navbar.scss';
import { Link } from "react-router-dom";
//import home from '../../assets/images/icons/home.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import instagram from '../../assets/images/icons/instagram.svg';

const Navbar = props => {
	return (
		<nav className="nav">
			<div className='navbar'>
				<div className="menu-block">
					<ul className="menu">
						<li className="menu__item">
							<Link to="/">Тестовая игра</Link>
						</li>
						<li className="menu__item">
							<Link to="how2play/">Как играть?</Link>
						</li>
						<li className="menu__item">
							<Link to="rules">Правила</Link>
						</li>
					</ul>
				</div>
				<div className="social">
					{/*<img src={home} />*/}
					<img src={facebook} />
					<img src={instagram} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;