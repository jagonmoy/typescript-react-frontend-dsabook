import { UserAuthInterface } from "./userModel";

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

export interface BlogViewActionsInterface {
    blogs: BlogInterface[],
    auth: UserAuthInterface,
    id: string
}
 export interface BlogViewContentInterface {
    blogs: BlogInterface[],
    id?: string
 }
 export interface CreateBlogButtonInterface {
    blogHeadline: string,
    setBlogHeadline: React.Dispatch<React.SetStateAction<string>>,
    blogDescription : string ,
    setBlogDescription: React.Dispatch<React.SetStateAction<string>>
 }
export interface CreateBlogDescriptionInterface {
    blogDescription : string ,
    setBlogDescription: React.Dispatch<React.SetStateAction<string>>
}

export interface CreateBlogHeadlineInterface {
    blogHeadline: string,
    setBlogHeadline: React.Dispatch<React.SetStateAction<string>>
}

export interface BlogCardContentInterface {
    author: string ,
    blogHeadline: string,
    blogDescription: string
}