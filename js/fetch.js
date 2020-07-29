export const fetchData = (url, onSuccess) => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            onSuccess(data)
        })
        .catch((error) => {
            console.log(error)
            alert("No more pages, you have to go back!")
        })
}