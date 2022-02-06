import React from 'react';
import { Link } from 'react-router-dom';
import ARTICLES_LIST from '../ArticlesSideList/ARTICLES_LIST'

const ArticlesSideMain = ({onActiveIndex}) => {
    const hideDescription = (string) => {
		return `${string.substring(0, 200)}...`
	}
 return (
     <ul>
         <h2>Last Articles for Helping You</h2>
         {ARTICLES_LIST.slice(0, 3).map((article, index) => {
             return(
                 <li className="main__articles-side-list" onClick={()=>onActiveIndex(index)} key={article.title}>
                    <Link to="/articles">
                        <h3>{article.title}</h3>
                        <p>{hideDescription(article.description)}</p>
                    </Link>
                 </li>
             )
         })}
     </ul>
 )
}
export default ArticlesSideMain;