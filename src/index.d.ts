type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T
}

type TemplateContext = {
    limit: number;
    skip: number;
    numPages: number;
    currentPage: number;
}