import Layout from 'components/layout'
import { Container, Title } from 'components/ui'
import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-atom-dark.css'
import Comments from 'components/comments'
import Captcha from 'components/captcha'

type PostTypes = 'blog' | 'shelf' | 'page'

type Data = {
    shelf: GatsbyTypes.ShelfSingleQuery
    blog: GatsbyTypes.BlogSingleQuery
    page: GatsbyTypes.PageSingleQuery
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
                        query.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData?.src,
                }}
            >
                <Captcha />
                <Container>
                    <main className="my-24">
                        <div className="text-center">
                            <Title>{query.title}</Title>
                            {type !== 'page' && (
                                <div className="flex items-center justify-center mt-10">
                                    <div className="text-right px-3">
                                        <p className="text-fg-light text-sm">
                                            Created on
                                        </p>
                                        <p className="text-fg-primary text-lg">
                                            {query.date}
                                        </p>
                                    </div>
                                    <div className="text-left px-3">
                                        <p className="text-fg-light text-sm">
                                            Updated on
                                        </p>
                                        <p className="text-fg-primary text-lg">
                                            {query.modified}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="single-page max-w-full mt-24 text-fg-primary"
                            dangerouslySetInnerHTML={{
                                __html: query.content,
                            }}
                        ></div>
                    </main>
                    {type !== 'page' && <Comments postId={query.databaseId} />}
                </Container>
            </Layout>
        );
    }

    return null
}
