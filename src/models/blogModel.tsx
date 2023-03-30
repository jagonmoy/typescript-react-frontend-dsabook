export interface BlogInterface {
    id: string;
    blogHeadline: string;
    author: string;
    blogDescription: string;
}
export interface BlogsStateInterface {
    blogs : BlogInterface[]
}
export type BlogIDInterface = {
    id : string;
};
