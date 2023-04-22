export interface Blog {
    id?: string;
    blogHeadline: string;
    author: string;
    blogDescription: string;
}
export interface GetBlogResponse {
    author: string,
    blogDescription: string,
    blogHeadline: string,
    createdAt: string,
    updatedAt: string,
    id?: string
}
export interface GetBlogRequest {
    id: string | undefined
}

export type BlogID = {
    id ?: string | undefined;
};

export interface BlogEdit {
    author: string
    id?: string,
    blogHeadline: string | undefined,
    blogDescription: string | undefined,
    setBlogHeadline: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    setBlogDescription: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

 export interface CreateBlogButton {
    blogHeadline: string,
    setBlogHeadline: React.Dispatch<React.SetStateAction<string>>,
    blogDescription : string ,
    setBlogDescription: React.Dispatch<React.SetStateAction<string>>
 }
export interface CreateBlogDescription {
    blogDescription : string ,
    setBlogDescription: React.Dispatch<React.SetStateAction<string>>
}

export interface CreateBlogHeadline {
    blogHeadline: string,
    setBlogHeadline: React.Dispatch<React.SetStateAction<string>>
}

export interface BlogContent {
    author: string ,
    blogHeadline: string,
    blogDescription: string
}

export interface EditBlogRequest {
    id: string | undefined,
    blogHeadline: string | undefined,
    blogDescription: string | undefined,
    token: string
}

export interface DeleteBlogRequest {
    id: string | undefined
    token: string
}

  