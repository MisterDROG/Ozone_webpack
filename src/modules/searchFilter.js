const searchFilter = (data, value) => {
    return data.filter((item) => {
        console.log(item);
        return item.title.includes(value)
    })

}

export default searchFilter 