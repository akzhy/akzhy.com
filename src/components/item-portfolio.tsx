import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Title } from './ui'

interface Props {
    id: string
    title: string
    slug: string
    date: string
    description: string
    featured_image: GatsbyTypes.ImageSharp | undefined
}

export function ShelfItem({
    id,
    title,
    featured_image,
    date,
    slug,
    description,
}: Props) {
    return (
        <div className="w-full md:w-1/2 relative pb-4 lg:pt-11 shelf-item">
            <div className="connector w-1/2 top-0 left-1/2 h-11 absolute hidden lg:block">
                <div className="line w-full h-5" />
            </div>
            <a
                className="bg-bg-secondary block text-fg-primary rounded overflow-hidden border-4 border-transparent focus:border-primary focus:outline-none duration-300 transition-all hover:border-secondary group"
                title={title}
                href={`/shelf/${slug}`}
            >
                <article className="flex flex-wrap relative">
                    <div className="w-full relative flex-shrink-0">
                        {featured_image && (
                            <GatsbyImage
                                image={featured_image.gatsbyImageData}
                                alt={title}
                            />
                        )}
                    </div>
                    <div className="lg:absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-bg-accent content opacity-100 group-hover:opacity-100 lg:opacity-0">
                        <Title className="text-4xl text-fg-primary">
                            {title}
                        </Title>
                        <p className="mt-4">{description}</p>
                        <p
                            className="text-fg-light lg:hidden"
                            aria-label={`Published on ${date}`}
                        >
                            {date}
                        </p>
                    </div>
                </article>
            </a>
            <p
                className="text-fg-light items-center absolute right-0 top-0 date text-sm -mt-12 hidden lg:block"
                aria-label={`Published on ${date}`}
            >
                {date}
            </p>
        </div>
    )
}

export function ShelfContainer({ data }: { data: Props[] }) {
    const items = data.map((item) => (
        <ShelfItem key={`si-${item.id}`} {...item} />
    ))
    return (
        <div className="relative">
            <div
                className="w-1 h-full left-1/2 absolute bg-bg-secondary hidden lg:block"
                style={{ marginLeft: `-0.125rem` }}
            />
            <div className="flex flex-wrap pt-20">{items}</div>
        </div>
    )
}
