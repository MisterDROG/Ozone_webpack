export const searchFilter = (data, value) => {
    return data.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const searchCatalog = (data, value) => {
    return data.filter((item) => {
        return item.category === value;
    })
}
