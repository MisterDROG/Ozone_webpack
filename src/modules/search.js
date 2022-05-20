import searchFilter from "./searchFilter"
import getDataPH from "./getData"
import renderGoods from './renderGoods'

const search = () => {
    const searchPannel = document.querySelector('.search-wrapper_input')

    searchPannel.addEventListener('input', (input) => {
        console.log(input.target.value)
        getDataPH().then((data) => {
            renderGoods(searchFilter(data, input.target.value));
        })
    })
}

export default search