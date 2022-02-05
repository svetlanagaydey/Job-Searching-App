import React from 'react';
import ARTICLES_LIST from '../ArticlesSideList/ARTICLES_LIST'

const ActiveArticle = ({activeIndex}) => {
    const article = ARTICLES_LIST[activeIndex];
    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {article.content.map((part) => {
                return (
                    <div key={part.subtitle}>
                        <h3>{part.subtitle}</h3>
                        <p>{part.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default ActiveArticle;