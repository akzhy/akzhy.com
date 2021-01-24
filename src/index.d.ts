type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T
}

type Themes = 'theme-light' | 'theme-dark'

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
    is_post_author: boolean
    children: CommentItem[]
}

type SubscriptionItem = {
    comment_id: string
    comment: string
    post_url: string
    post_title: string
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
    'restcomments/v1/subscriptions/unsubscribe': {
        request: {
            key: string
            unsub?: number[]
        }
        response:
            | {
                  result: true
              }
            | {
                  result: false
                  error?: 'key_expired'
              }
    }
    'restcomments/v1/subscriptions/request-management': {
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
    'restcomments/v1/subscriptions/list': {
        request: {
            key: string
        }
        response:
            | {
                  result: true
                  data: SubscriptionItem[]
              }
            | { result: false }
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
