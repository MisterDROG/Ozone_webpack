import {priceFilter, hotsaleFilter} from "./searchFilter"
import getDataPH from "./getData"
import renderGoods from './renderGoods'

const filter = () => {
    const minPrice = document.getElementById('min')
    const maxPrice = document.getElementById('max')
    const checkBox = document.querySelector('#discount-checkbox')
    const checkBoxicon = document.querySelector('.filter-check_checkmark')

    checkBox.addEventListener('change', () => {
        checkBoxicon.classList.toggle('checked')
        getDataPH().then((data) => {
            renderGoods(priceFilter(hotsaleFilter(data, checkBox.checked), minPrice.value, maxPrice.value));
        })
    })

    minPrice.addEventListener('input', () => {
        getDataPH().then((data) => {
            renderGoods(priceFilter(hotsaleFilter(data, checkBox.checked), minPrice.value, maxPrice.value));
        })
    })

    maxPrice.addEventListener('input', () => {
        getDataPH().then((data) => {
            renderGoods(priceFilter(hotsaleFilter(data, checkBox.checked), minPrice.value, maxPrice.value));
        })
    })
}

export default filter