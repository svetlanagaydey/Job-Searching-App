import React, { useState, useEffect } from 'react';
import HeaderMain from '../../HeaderMain/HeaderMain';
import ArticlesSideList from '../../ArticlesSideList/ArticlesSideList'
import './index.css'
import { set } from 'mongoose';

const ArticlesPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect (() => {
		
    console.log("active index: "+activeIndex)
  }, [activeIndex])

	const onActiveIndex = (index) => {
		console.log(index)
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
					</div>
				</main>
			</div>
    )
}

export default ArticlesPage