import React from 'react';
import { Link } from 'react-router-dom';
import ARTICLES_LIST from '../ArticlesSideList/ARTICLES_LIST';
import './index.css'

const ArticlesSideMain = () => {
    const hideDescription = (string) => {
		return `${string.substring(0, 200)}...`
	}
 return (
     <ul className="main__articles-block">
         <h2 className="main__articles-header">Articles for Helping You</h2>
         {ARTICLES_LIST.slice(0, 4).map((article, index) => {
             return(
                 <li className="main__article-side" key={article.title}>
                    <Link to="/articles">
                        <h3 className="main__article-title">{article.title}</h3>
                        <p className="main__article-desc">{hideDescription(article.description)}</p>
                    </Link>
                 </li>
             )
         })}
     </ul>
 )
}
export default ArticlesSideMain;