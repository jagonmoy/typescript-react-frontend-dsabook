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
export interface EmailInterface {
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    email: string,
}

export interface PasswordInterface {
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    password: string
}

export interface ConfirmPasswordInterface {
    confirmPassword: string,
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
}

export interface NameInterface {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>
}

export interface UsernameInterface {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>
}