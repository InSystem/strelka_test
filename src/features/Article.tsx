import { useParams } from "react-router-dom";
// import { getArticles } from '../api/articles-api-client'
import useFetch from "react-fetch-hook";

const Article = () => {
    let { slug } = useParams<{ slug: string }>();
    console.log(slug)
    const { data, error } = useFetch(`https://api.strelka.institute/api/ru/magazine/${slug.substring(1)}`);

	if (error) {
		return <div className="info">
			<p>Мaтериалы по заданным критериям не найдены</p>
		</div>
	}

    if (data) {
        // @ts-ignore
        const nodes = data.bodyJson.document.nodes
        console.log(nodes)
        return (
            // @ts-ignore
            <div>{nodes.map((node, index) => {
                return <p key={index}>{node.type}</p>
            })}</div>
        )
    }

    return (
        <div>Загрузка... {slug}</div>
    )
}

export default Article