export const displayError = (status: any,setError: any,message: string) => {
    setError('');
    if (status === "FETCH_ERROR") setError('Server Error! ')
    else setError(message)
}