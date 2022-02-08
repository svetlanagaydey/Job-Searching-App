import { Link } from 'react-router-dom';
//import logo from './images'
import './index.css';

import logo from './images/logo1.png'

const HeaderMain = () => {
  return (
		<header className="header">
			<div className="header-container">
				<Link to="/" className="header__logo-link">
					<img src={logo}  className="header__logo" alt="logo"/>
					<div className="logo-text">
						<span className="logo-text-first">Find</span>
						<span className="logo-text-second">Your Job</span>
					</div>
				</Link>
				<Link to="/articles" className="header__button">
					Articles
				</Link>
				<Link to="/employers" className="header__button button-post">
					EMPLOYERS / POST JOB
				</Link>
			</div>
		</header>
  ) 
}
export default HeaderMain;