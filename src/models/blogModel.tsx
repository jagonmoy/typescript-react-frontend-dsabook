export interface Blog {
    id?: string;
    blogHeadline: string;
    blogDescription: string,
    author: string;
    createdAt: string,
    updatedAt: string,
}
export interface BlogCardListProps {
    data: Blog[];
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
    id?: string
}

export type BlogID = {
    id ?: string;
};

export interface BlogEdit {
    author: string
    id?: string,
    blogHeadline?: string,
    blogDescription?: string,
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
    createdAt: string,
    updatedAt: string,
}

export interface EditBlogRequest {
    id?: string,
    blogHeadline?: string,
    blogDescription?: string,
    token: string
}

export interface DeleteBlogRequest {
    id?: string
    token: string
}

  