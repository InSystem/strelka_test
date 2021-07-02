import { useState, useEffect, useCallback } from 'react';
import ArticleListItem from './ArticleListItem'

import { ArticleCard } from 'MyModels';
const ArticleList = () => {
	const LIMIT = 9;
	const [articles, setAticles] = useState([] as Array<ArticleCard>);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [offset, setOffset] = useState(0);

	const loadData = useCallback(
		async () => {
			const URL = `https://api.strelka.institute/api/ru/magazine/feed?format=news&limit=${LIMIT.toString()}&offset=${offset.toString()}`
			setLoading(true);
			try {
				const res = await fetch(URL)
				const { feed } = await res.json()
				const newArticles = feed.map((article: any) => {
					const { id, topic, title, description, publishedAt, coverImage, tags, slug } = article;
					return {
						id,
						topic,
						title,
						description,
						date: publishedAt,
						image: coverImage.location,
						tags,
						slug
					}
				})

				setAticles([...articles, ...newArticles]);
				setError('');
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		},
		// eslint-disable-
		[offset] 
	);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const loadMore = () => {
		setOffset(offset + LIMIT);
	};

	if (error) {
		return <div className="info">
			<p>Мaтериалы по заданным критериям не найдены</p>
		</div>
	}

	return (
		<>
			<ul className="article-list">
				{articles.map((article: ArticleCard) =>
					<ArticleListItem
						key={article.id}
						{...article} />
				)}
			</ul>
			<div className="load-more">
				<button
					className="button"
					onClick={loadMore}>
					{isLoading ? 'Загрузка...' : 'Загрузить ещё'}
				</button>
			</div>
		</>
	)
}

export default ArticleList