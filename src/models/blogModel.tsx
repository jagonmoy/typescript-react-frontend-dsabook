export interface BlogInterface {
    id?: string;
    blogHeadline: string;
    author: string;
    blogDescription: string;
}
export interface BlogAPI {
    author: string,
    blogDescription: string,
    blogHeadline: string,
    createdAt: string,
    updatedAt: string,
    id?: string
}
export interface BlogsStateInterface {
    blogs : BlogInterface[]
}
export type BlogIDInterface = {
    id ?: string;
};

export interface BlogEditInterface {
    author: string
    id?: string,
    blogHeadline: string | undefined,
    blogDescription: string | undefined,
    setBlogHeadline: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    setBlogDescription: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
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