declare module 'MyModels' {
	export type Tag = {
		id: string
		slug: string
		name: string
	};

	export type ArticleCard = {
		id: number
		topic: string
		title: string
		description: string
		date: string
		image: string
        tags: Array<Tag>
        slug: string
    }

    export type ArticleType = {
        id: number
        topic: string
        title: string
        description: string
        date: string
        image: string
        tags: Array<Tag>
    }
}