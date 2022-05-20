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

export const priceFilter = (data, min, max) => {
    return data.filter((item) => {
        if (min === '' && max ==='') {
            return item;
        } else if (min !== '' && max =='') {
            return item.price > +min
        } else if (min == '' && max !=='') {
            return item.price < +max
        } else if (min !== '' && max !=='') {
            return (item.price < +max) && (item.price > +min);
        }
    })
}

export const hotsaleFilter = (data, value) => {
    return data.filter((item) => {
        if (value) {
            return item.sale === true; 
        } else return item;
    })
}

