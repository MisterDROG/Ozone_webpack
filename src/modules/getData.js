
const getDataPH = () => {
    return fetch('https://test-e79a5-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json();
    })
}

export default getDataPH