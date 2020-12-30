import Layout from 'components/layout'
import { Container, Title } from 'components/ui'
import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

type PostTypes = 'blog' | 'shelf'

type Data = {
    shelf: GatsbyTypes.ShelfSingleQuery
    blog: GatsbyTypes.BlogSingleQuery
}

export default function TemplateSinglePage<T extends PostTypes>({
    type,
    data,
}: {
    type: PostTypes
    data: Data[T]
}) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    if (data.query) {
        const { query } = data
        return (
            <Layout
                seo={{
                    title: query.title,
                    description: query.acf.description as string,
                    image:
                        query.featuredImage.node?.localFile?.childImageSharp
                            ?.fluid?.src,
                }}
            >
                <Container>
                    <main className="my-24">
                        <div className="text-center">
                            <Title>{query.title}</Title>
                        </div>
                        <div
                            className="single-page max-w-full mt-24 text-fg-primary"
                            dangerouslySetInnerHTML={{
                                __html: query.content,
                            }}
                        ></div>
                    </main>
                </Container>
            </Layout>
        )
    }

    return null
}
