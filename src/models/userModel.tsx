export interface UserInterface{
    username : string,
    status : boolean,
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
