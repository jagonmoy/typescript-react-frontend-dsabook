export const displayError = (status: any,setError: any,message: string) => {
    setError('');
    if (status === "FETCH_ERROR") setError('Error Fetching Data !')
    else setError(message)
}