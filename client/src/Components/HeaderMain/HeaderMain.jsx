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
				  <span className="logo-text">Find Your Job</span>
				</Link>

				<div className="header__right">
          <Link to="/articles" className="header__right-item">
            Articles
          </Link>
          <Link to="/employers" className="header__right-item">
            Employers
          </Link>
          <Link to="/addPosting" className="header__right-item button-post">
            POST JOB
          </Link>
        </div>
			</div>
		</header>
  ) 
}
export default HeaderMain;