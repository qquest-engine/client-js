import React from "react";
import './Navbar.scss';
import { Link } from "react-router-dom";
import home from '../../assets/images/icons/home.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import instagram from '../../assets/images/icons/instagram.svg';
import user from '../../assets/images/icons/user.svg';

class Navbar extends React.Component {
  render() {
	return (
		<nav className="nav">
			<div className='navbar'>
				<div className="menu-block">
					{this.props.isLogged && <h2><img src={user} className="" /> {(this.props.user && this.props.user.userName && this.props.user.userName.toUpperCase()) || ''}</h2>}
					<ul className="menu">
						{this.props.isLogged && <li>
							<ul className="submenu">
								<li className="menu__item">
									<Link to="/profile/">Мой кабинет</Link>
								</li>
								<li className="menu__item">
									<Link to="/create-quest/">Создать квест</Link>
								</li>
								<li className="menu__item">
									<Link to="/quests/">Пройденные игры</Link>
								</li>
								<li className="menu__item">
									<Link to={`/quests/${this.props.user && this.props.user.id || ''}`}>Созданные игры</Link>
								</li>
								<li className="menu__item">
									<Link to="/statistic/">Моя статистика</Link>
								</li>
								<li className="menu__item">
									<span onClick={this.props.onLogout}>Выйти</span>
								</li>
							</ul>
						</li>}
						<li className="menu__item">
							<Link to="/">Тестовая игра</Link>
						</li>
						<li className="menu__item">
							<Link to="/how2play">Как играть?</Link>
						</li>
						<li className="menu__item">
							<Link to="/rules">Правила</Link>
						</li>
					</ul>
				</div>
				<div className="social">
					{<img src={home} className="social__item" />}
					<img src={facebook} className="social__item" />
					<img src={instagram} className="social__item" />
				</div>
			</div>
		</nav>
	);
  }
}

export default Navbar;