import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Calendar } from 'react-feather'

interface Props {
    id: string
    title: string
    slug: string
    date: string
    description: string
    featured_image: GatsbyTypes.ImageSharp | undefined
}

export default function BlogItem({
    id,
    title,
    featured_image,
    date,
    slug,
    description,
}: Props) {
    return (
        <a
            className="bg-bg-secondary block text-fg-primary my-8 rounded overflow-hidden border-4 border-transparent focus:border-primary focus:outline-none duration-300 transition-all hover:border-secondary blog-item"
            title={title}
            href={`/blog/${slug}`}
        >
            <article className="flex">
                <div className="max-w-full w-96 relative flex-shrink-0 image-container">
                    {featured_image && (
                        <GatsbyImage
                            image={featured_image.gatsbyImageData}
                            alt={title}
                        />
                    )}
                </div>
                <div className="p-4 py-8">
                    <h3 className="text-3xl font-black">{title}</h3>
                    <p className="flex mt-4 text-fg-light items-center">
                        <Calendar className="text-primary mr-2" /> {date}
                    </p>
                    <p className="mt-4">{description}</p>
                </div>
            </article>
        </a>
    )
}
