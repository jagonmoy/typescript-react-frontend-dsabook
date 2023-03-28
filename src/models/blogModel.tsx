export interface BlogInterface {
    id: string;
    blogHeadline: string;
    author: string;
    blogDescription: string;
}

export interface BlogsInterface {
    blogs: BlogInterface[];
}

export type RouteBlogView = {
    id?: string;
};

export interface SingleBlogInterface {
    id: number;
}
