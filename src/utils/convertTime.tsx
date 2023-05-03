export const convertToReadableTime = (databaseTime : string) => {
    const date = new Date(databaseTime); 
    return date.toLocaleString();
}