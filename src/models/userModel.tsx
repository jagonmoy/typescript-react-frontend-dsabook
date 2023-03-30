export interface UserInterface{
    name: string,
    username: string,
    email : string,
    password: string,
    confirmPassword: string
}
export interface UserAuthInterface{
    currentUser : string,
    status : boolean
}
export interface UserStateInterface {
    users: UserInterface[] ,
    auth : UserAuthInterface
}