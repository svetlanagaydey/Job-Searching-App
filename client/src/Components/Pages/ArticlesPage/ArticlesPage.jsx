import React, { useState, useEffect } from 'react';
import HeaderMain from '../../HeaderMain/HeaderMain';
import ArticlesSideList from '../../ArticlesSideList/ArticlesSideList';
import ActiveArticle from '../../ActiveArticle/ActiveArticle';
import './index.css'

const ArticlesPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect (() => {
		//console.log("index from main: "+ index)
    	console.log("active index: "+activeIndex)
  }, [activeIndex])

	const onActiveIndex = (index) => {
		setActiveIndex(index);
	}
    return (
			<div>
				<HeaderMain />
				<h2>Articles</h2>
				<main className="main__articles">
					<div className="articles-side-menu">
						<ArticlesSideList onActiveIndex={onActiveIndex} />
					</div>
					<div className="main__article">
						<ActiveArticle activeIndex={activeIndex}/>
					</div>
				</main>
			</div>
    )
}

export default ArticlesPage