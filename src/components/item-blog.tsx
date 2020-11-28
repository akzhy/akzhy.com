import React from "react"
import Image from "gatsby-image"

interface Props {
    id: string;
    title: string;
    slug: string;
    date: string;
    featured_image: GatsbyTypes.ImageSharp | undefined;
}

export default function BlogItem({id,title,featured_image,date,slug}:Props) {
    return (
        <div className="bg-bg-secondary flex text-fg-primary my-8">
            <div className="max-w-full w-1/3 relative">
                {(featured_image && featured_image.fluid) && <Image fluid={featured_image.fluid} />}
            </div>
            <div>
                <h3 className="text-3xl font-black">{title}</h3>
            </div>
        </div>
    )
}