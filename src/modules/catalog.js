import { searchCatalog } from "./searchFilter"
import getDataPH from "./getData"
import renderGoods from './renderGoods'

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')

    const catalogCat = document.querySelectorAll('.catalog-list li')

    catalogCat.forEach((elem) => {
        elem.addEventListener('click', () => {
            console.log(elem.textContent)
            getDataPH().then((data) => {
                renderGoods(searchCatalog(data, elem.textContent));
            })
        })
    })


    let swithcer = false;
    btnCatalog.addEventListener('click', () => {
        if (swithcer) {
            catalogModal.style.display = 'none';
            swithcer = false;
        }
        else {
            catalogModal.style.display = 'block';
            swithcer = true;
        }
    })

}

export default catalog