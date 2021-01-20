import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
    title: string
    description: string
    image?: string
}

export function SEO({ description, title, image }: Props) {
    const seoTitle = title !== 'akzhy' ? `${title} | akzhy` : `akzhy`
    const metaDescription = description || '';

    const defaultImageQuery = useStaticQuery<GatsbyTypes.DefaultCardImageQuerQuery>(graphql`
        query DefaultCardImageQuery{
            file (name: {eq: "main"}, sourceInstanceName: { eq: "cardimages"}) {
                childImageSharp {
                    original {
                        src
                    }
                }
            }
        }
    `);

    const defaultImage = defaultImageQuery.file?.childImageSharp?.original?.src as string;
    let metaImage = image ? image : defaultImage;
    metaImage = metaImage.startsWith("/") ? `${process.env.SITE_URL}${metaImage}` : metaImage

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            title={seoTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: metaImage,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: `_akzhy`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: metaImage
                }
            ]}
        />
    )
}
