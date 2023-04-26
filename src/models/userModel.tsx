export interface AddNewUserRequest {
    username: string,
    name: string, 
    password: string,
    email: string,
    confirmPassword: string
}
export interface AuthUser {
    username: string,
    password: string
}

export interface UserState{
    username : string,
    accessToken : string,
}

export interface Button {
    label: string,
    testId: string
}
export interface Field {
    label: string,
    field: string,
    value: string,
    type: string,
    onSetFieldChanged: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
export interface Redirection {
    path: string,
    label: string
}
export interface SignInRequest {
    token : string,
    username: string,
    password: string
}

export interface SignInResponse {
    accessToken: string,
    refreshToken: string,
}
  
export interface CreateBlogRequest {
    token: string,
    blogHeadline: string,
    blogDescription: string
  }

export interface AccessTokenRequest {
    refreshToken: string | null
}
export interface AccessTokenResponse {
    accessToken: string 
}
