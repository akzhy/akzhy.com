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
    children: CommentItem[]
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
    'restcomments/v1/add': {
        request: {
            name: string
            email: string
            parent: string
            post: number
            comment: string
        }
        response:
            | {
                  result: true
                  data: CommentItem
              }
            | {
                  result: false
                  error: 'name' | 'email' | 'comment' | 'captcha' | 'other'
              }
    }
    'restcomments/v1/unsubscribe': {
        request: {
            key: string
        }
        response: {
            result: boolean
        }
    }
    'restcomments/v1/request-subscriptions-management': {
        request: {
            email: string
        }
        response:
            | {
                  result: true
              }
            | {
                  result: false
                  error: 'mail' | 'no-sub'
              }
    }
    'restcontact/v1/add': {
        request: {
            name: string
            email: string
            message: string
            captcha: string
        }
        response:
            | {
                  result: true
              }
            | {
                  result: false
                  error: string
              }
    }
}

interface Window {
    grecaptcha: any
}
