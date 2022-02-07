import React from 'react';
import ARTICLES_LIST from '../ArticlesSideList/ARTICLES_LIST';
import './index.css';

const ActiveArticle = ({activeIndex}) => {
    const article = ARTICLES_LIST[activeIndex];
    return (
        <div className="active-article__block">
            <h2 className="active-article__title">{article.title}</h2>
            <p className="active-article__description">{article.description}</p>
            {article.content.map((part) => {
                return (
                    <div key={part.subtitle}>
                        <h3 className="active-article__subtitle">{part.subtitle}</h3>
                        <p className="active-article__text">{part.text}</p>
                        <p>{part.example}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default ActiveArticle;