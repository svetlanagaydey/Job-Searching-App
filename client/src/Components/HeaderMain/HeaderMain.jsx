import { Link } from 'react-router-dom';
import './index.css';

const HeaderMain = () => {
   return (
       <header className="header">
           <img src="" alt="logo" className="header__logo"/>
           <Link to="/articles" className="header__post-job-button">
               Articles
           </Link>
           <Link to="/addPosting" className="header__post-job-button">
               Employers / Post job
           </Link>
       </header>
   ) 
}
export default HeaderMain;