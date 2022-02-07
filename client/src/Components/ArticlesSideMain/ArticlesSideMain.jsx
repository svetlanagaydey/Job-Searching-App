import React from 'react';
import { Link } from 'react-router-dom';
import ARTICLES_LIST from '../ArticlesSideList/ARTICLES_LIST';
import './index.css'

const ArticlesSideMain = ({onActiveIndex}) => {
    const hideDescription = (string) => {
		return `${string.substring(0, 200)}...`
	}
 return (
     <ul className="main__articles-block">
         <h2 className="main__articles-header">Last Articles for Helping You</h2>
         {ARTICLES_LIST.slice(0, 3).map((article, index) => {
             return(
                 <li className="main__article-side" onClick={()=>onActiveIndex(index)} key={article.title}>
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