import ARTICLES_LIST from "./ARTICLES_LIST"
const ArticlesSideList = ({onActiveIndex}) => {

	const hideDescription = (string) => {
		return `${string.substring(0, 200)}...`
	}
	return (
		<ul className="articlesList">
			{ARTICLES_LIST.map((article, ind) => {
				return (
					<li key={article.title} onClick={()=>onActiveIndex(ind)} className="articles-lits__title">
						<h3 className="articles-list__title">{article.title}</h3>
						<p className="articles-list__description">{hideDescription(article.description)}</p>
					</li>
				)
			})}
		</ul>
	)
}

export default ArticlesSideList;