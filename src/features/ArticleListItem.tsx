import { ArticleCard } from 'MyModels';
import { format, parseISO } from 'date-fns'
import './article-item.scss'

const ArticleListItem = (article: ArticleCard) => {
	const {title, description, date, image } = article;
	return (
		<li className="article">
            <a className="article__list" href={`/article/:${article.slug}`}>
				<div className="article__image">
					<img
						src={image}
						alt={title}
					/>
				</div>
				<div className="article__content">
					<p className="article__date">{format(parseISO(date), 'dd.MM')}, КБ Стрелка</p>
					<h3 className="article__title">{title}</h3>
					<p className="article__desc">{description}</p>
				</div>
			</a>
		</li>
	)
}

export default ArticleListItem