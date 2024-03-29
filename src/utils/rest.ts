export default async function rest<T extends keyof FetchRequests>(
    url: T,
    body: FetchRequests[T]['request']
): Promise<FetchRequests[T]['response']> {
    try {
        const controller = new AbortController()
        const { signal } = controller
        const timeoutId = setTimeout(() => controller.abort(), 10000)

        const res = await fetch(`${process.env.GATSBY_REST_API}/${url}`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            signal,
        })

        clearTimeout(timeoutId)

        if (res.ok) {
            return res.json()
        }
        throw new Error('server')
    } catch (err) {
        throw new Error(err.name)
    }
}
