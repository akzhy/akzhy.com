type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T
}

type TemplateContext = {
    limit: number
    skip: number
    numPages: number
    currentPage: number
}

type CommentItem = {
    id: string
    author: string
    date: string
    content: string
    parent_id: string
    avatar: string
}

type MetaState = {
    mainLoading: boolean
    subLoading: boolean
    error: boolean
}

type FetchRequests = {
    'restcomments/v1/list': {
        request: {
            id: number
        }
        response:
            | {
                  result: 'error'
              }
            | {
                  result: 'success'
                  data: CommentItem[]
              }
    }
}
